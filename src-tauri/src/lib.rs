//! Tauri backend for the Sheets editor.
//!
//! The browser side (IronCalc WASM) can only serialise/deserialise IronCalc's
//! native `.ic` byte format. All `.xlsx` <-> `.ic` conversion happens here using
//! the `ironcalc` Rust crate, which is built from the *same* release (v0.7.1) as
//! the vendored WASM package so the `.ic` bytes are binary-compatible.

use std::fs;
use std::io::Cursor;
use std::path::Path;
use std::sync::mpsc;

use ironcalc::base::Model;
use ironcalc::export::save_xlsx_to_writer;
use ironcalc::import::load_from_xlsx_bytes;
use serde::Serialize;
use tauri::menu::{MenuBuilder, MenuItemBuilder, SubmenuBuilder};
use tauri::{AppHandle, Emitter};
use tauri_plugin_dialog::DialogExt;

#[derive(Serialize)]
struct OpenedFile {
    /// Absolute path the file was read from.
    path: String,
    /// Basename, for display and the default save name.
    name: String,
    /// IronCalc `.ic` bytes for `Model.from_bytes` on the JS side.
    data: Vec<u8>,
}

fn is_xlsx(path: &Path) -> bool {
    path.extension()
        .and_then(|e| e.to_str())
        .map(|e| e.eq_ignore_ascii_case("xlsx"))
        .unwrap_or(false)
}

fn file_name(path: &Path) -> String {
    path.file_name()
        .and_then(|n| n.to_str())
        .unwrap_or("workbook")
        .to_string()
}

/// Reads a spreadsheet from disk and returns IronCalc `.ic` bytes.
/// `.xlsx` is converted via the ironcalc crate; `.ic` is returned verbatim.
fn read_as_ic(path: &Path) -> Result<Vec<u8>, String> {
    let bytes = fs::read(path).map_err(|e| e.to_string())?;
    if is_xlsx(path) {
        let workbook = load_from_xlsx_bytes(&bytes, &file_name(path), "en", "UTC")
            .map_err(|e| e.to_string())?;
        let model = Model::from_workbook(workbook, "en").map_err(|e| e.to_string())?;
        Ok(model.to_bytes())
    } else {
        Ok(bytes)
    }
}

/// Writes IronCalc `.ic` bytes to disk, converting to `.xlsx` when the target
/// path has an `.xlsx` extension.
fn write_ic(path: &Path, ic: &[u8]) -> Result<(), String> {
    if is_xlsx(path) {
        let model = Model::from_bytes(ic, "en").map_err(|e| e.to_string())?;
        let cursor = save_xlsx_to_writer(&model, Cursor::new(Vec::new()))
            .map_err(|e| e.to_string())?;
        fs::write(path, cursor.into_inner()).map_err(|e| e.to_string())?;
    } else {
        fs::write(path, ic).map_err(|e| e.to_string())?;
    }
    Ok(())
}

#[tauri::command]
async fn open_file(app: AppHandle) -> Result<Option<OpenedFile>, String> {
    let (tx, rx) = mpsc::channel();
    app.dialog()
        .file()
        .add_filter("Spreadsheets", &["xlsx", "ic"])
        .add_filter("Excel Workbook", &["xlsx"])
        .add_filter("IronCalc", &["ic"])
        .pick_file(move |f| {
            let _ = tx.send(f);
        });
    let Some(fp) = rx.recv().map_err(|e| e.to_string())? else {
        return Ok(None);
    };
    let path = fp.as_path().ok_or("Invalid file path")?.to_path_buf();
    let data = read_as_ic(&path)?;
    Ok(Some(OpenedFile {
        path: path.to_string_lossy().into_owned(),
        name: file_name(&path),
        data,
    }))
}

/// Renders one worksheet's used range as CSV (values as displayed).
fn build_csv(model: &Model, sheet: u32) -> Result<String, String> {
    let ws = model.workbook.worksheet(sheet)?;
    let dim = ws.dimension();
    let mut out = String::new();
    if dim.max_row >= dim.min_row && dim.max_column >= dim.min_column {
        for row in dim.min_row..=dim.max_row {
            let mut cells = Vec::with_capacity((dim.max_column - dim.min_column + 1) as usize);
            for col in dim.min_column..=dim.max_column {
                let value = model
                    .get_formatted_cell_value(sheet, row, col)
                    .unwrap_or_default();
                cells.push(csv_escape(&value));
            }
            out.push_str(&cells.join(","));
            out.push_str("\r\n");
        }
    }
    Ok(out)
}

fn csv_escape(s: &str) -> String {
    if s.contains([',', '"', '\n', '\r']) {
        format!("\"{}\"", s.replace('"', "\"\""))
    } else {
        s.to_string()
    }
}

/// Exports the workbook to a chosen path/format WITHOUT changing the document
/// currently being edited. `format` is "xlsx" or "csv"; `sheet` is only used for
/// csv (single-sheet). Returns the written path, or None if cancelled.
#[tauri::command]
async fn export_file(
    app: AppHandle,
    data: Vec<u8>,
    format: String,
    sheet: u32,
    default_name: String,
) -> Result<Option<String>, String> {
    let (ext, filter) = match format.as_str() {
        "csv" => ("csv", "CSV"),
        _ => ("xlsx", "Excel Workbook"),
    };
    let (tx, rx) = mpsc::channel();
    app.dialog()
        .file()
        .set_file_name(format!("{default_name}.{ext}"))
        .add_filter(filter, &[ext])
        .save_file(move |f| {
            let _ = tx.send(f);
        });
    let Some(fp) = rx.recv().map_err(|e| e.to_string())? else {
        return Ok(None);
    };
    let path = fp.as_path().ok_or("Invalid file path")?.to_path_buf();

    let model = Model::from_bytes(&data, "en").map_err(|e| e.to_string())?;
    if format == "csv" {
        fs::write(&path, build_csv(&model, sheet)?).map_err(|e| e.to_string())?;
    } else {
        let cursor =
            save_xlsx_to_writer(&model, Cursor::new(Vec::new())).map_err(|e| e.to_string())?;
        fs::write(&path, cursor.into_inner()).map_err(|e| e.to_string())?;
    }
    Ok(Some(path.to_string_lossy().into_owned()))
}

#[tauri::command]
async fn open_path(path: String) -> Result<OpenedFile, String> {
    let p = Path::new(&path);
    let data = read_as_ic(p)?;
    Ok(OpenedFile {
        path: path.clone(),
        name: file_name(p),
        data,
    })
}

#[tauri::command]
async fn save_file(path: String, data: Vec<u8>) -> Result<(), String> {
    write_ic(Path::new(&path), &data)
}

#[tauri::command]
async fn save_file_as(
    app: AppHandle,
    data: Vec<u8>,
    default_name: String,
) -> Result<Option<String>, String> {
    let (tx, rx) = mpsc::channel();
    app.dialog()
        .file()
        .set_file_name(&default_name)
        .add_filter("Excel Workbook", &["xlsx"])
        .add_filter("IronCalc", &["ic"])
        .save_file(move |f| {
            let _ = tx.send(f);
        });
    let Some(fp) = rx.recv().map_err(|e| e.to_string())? else {
        return Ok(None);
    };
    let path = fp.as_path().ok_or("Invalid file path")?.to_path_buf();
    write_ic(&path, &data)?;
    Ok(Some(path.to_string_lossy().into_owned()))
}

#[cfg(test)]
mod tests {
    use super::*;
    use ironcalc::export::save_to_xlsx;

    #[test]
    fn xlsx_ic_roundtrip() {
        let dir = std::env::temp_dir();
        let xlsx_in = dir.join(format!("sheets_in_{}.xlsx", std::process::id()));
        let xlsx_out = dir.join(format!("sheets_out_{}.xlsx", std::process::id()));
        let ic_out = dir.join(format!("sheets_out_{}.ic", std::process::id()));

        // Build a workbook with a formula and save it as .xlsx.
        let mut m = Model::new_empty("t", "en", "UTC", "en").unwrap();
        m.set_user_input(0, 1, 1, "5".into()).unwrap();
        m.set_user_input(0, 2, 1, "6".into()).unwrap();
        m.set_user_input(0, 3, 1, "=A1+A2".into()).unwrap();
        m.evaluate();
        save_to_xlsx(&m, xlsx_in.to_str().unwrap()).unwrap();

        // .xlsx -> .ic (what the frontend would receive on Open)
        let ic = read_as_ic(&xlsx_in).unwrap();
        let reopened = Model::from_bytes(&ic, "en").unwrap();
        assert_eq!(reopened.get_formatted_cell_value(0, 3, 1).unwrap(), "11");

        // .ic -> .xlsx (what Save produces) and back again
        write_ic(&xlsx_out, &ic).unwrap();
        let ic2 = read_as_ic(&xlsx_out).unwrap();
        assert_eq!(
            Model::from_bytes(&ic2, "en")
                .unwrap()
                .get_formatted_cell_value(0, 3, 1)
                .unwrap(),
            "11"
        );

        // .ic passthrough (no conversion)
        write_ic(&ic_out, &ic).unwrap();
        assert_eq!(read_as_ic(&ic_out).unwrap(), ic);

        let _ = std::fs::remove_file(xlsx_in);
        let _ = std::fs::remove_file(xlsx_out);
        let _ = std::fs::remove_file(ic_out);
    }

    #[test]
    fn csv_export_uses_display_values_and_escapes() {
        let mut m = Model::new_empty("t", "en", "UTC", "en").unwrap();
        m.set_user_input(0, 1, 1, "Name".into()).unwrap();
        m.set_user_input(0, 1, 2, "a, b".into()).unwrap(); // needs quoting
        m.set_user_input(0, 2, 1, "x\"y".into()).unwrap(); // needs escaped quote
        m.set_user_input(0, 2, 2, "5".into()).unwrap();
        m.set_user_input(0, 3, 2, "=B2+5".into()).unwrap(); // formula -> value
        m.evaluate();

        let csv = build_csv(&m, 0).unwrap();
        assert_eq!(csv, "Name,\"a, b\"\r\n\"x\"\"y\",5\r\n,10\r\n");
    }
}

/// Builds the native menu bar. File actions carry ids that are forwarded to the
/// frontend (which owns the workbook model) via the `menu` event.
fn build_menu(app: &AppHandle) -> tauri::Result<tauri::menu::Menu<tauri::Wry>> {
    let new = MenuItemBuilder::with_id("new", "New")
        .accelerator("CmdOrCtrl+N")
        .build(app)?;
    let open = MenuItemBuilder::with_id("open", "Open…")
        .accelerator("CmdOrCtrl+O")
        .build(app)?;
    let save = MenuItemBuilder::with_id("save", "Save")
        .accelerator("CmdOrCtrl+S")
        .build(app)?;
    let save_as = MenuItemBuilder::with_id("save_as", "Save As…")
        .accelerator("CmdOrCtrl+Shift+S")
        .build(app)?;
    let export_xlsx = MenuItemBuilder::with_id("export_xlsx", "Excel Workbook (.xlsx)").build(app)?;
    let export_csv = MenuItemBuilder::with_id("export_csv", "CSV (.csv)").build(app)?;
    let export_menu = SubmenuBuilder::new(app, "Export")
        .item(&export_xlsx)
        .item(&export_csv)
        .build()?;

    // App menu (first on macOS) — keeps About/Hide/Quit that a custom menu replaces.
    let app_menu = SubmenuBuilder::new(app, "Sheets")
        .about(None)
        .separator()
        .services()
        .separator()
        .hide()
        .hide_others()
        .show_all()
        .separator()
        .quit()
        .build()?;
    let file_menu = SubmenuBuilder::new(app, "File")
        .item(&new)
        .item(&open)
        .separator()
        .item(&save)
        .item(&save_as)
        .separator()
        .item(&export_menu)
        .separator()
        .close_window()
        .build()?;
    // Clipboard only: IronCalc handles copy/cut/paste via DOM events (safe to
    // route here) but does undo/redo through its own key handler, so those are
    // intentionally left out to avoid intercepting Cmd+Z/Y.
    let edit_menu = SubmenuBuilder::new(app, "Edit")
        .cut()
        .copy()
        .paste()
        .separator()
        .select_all()
        .build()?;

    MenuBuilder::new(app)
        .items(&[&app_menu, &file_menu, &edit_menu])
        .build()
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .invoke_handler(tauri::generate_handler![
            open_file,
            open_path,
            save_file,
            save_file_as,
            export_file
        ])
        .setup(|app| {
            let menu = build_menu(app.handle())?;
            app.set_menu(menu)?;
            Ok(())
        })
        .on_menu_event(|app, event| {
            let id = event.id().as_ref();
            if matches!(
                id,
                "new" | "open" | "save" | "save_as" | "export_xlsx" | "export_csv"
            ) {
                let _ = app.emit("menu", id.to_string());
            }
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
