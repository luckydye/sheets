/* tslint:disable */
/* eslint-disable */

export interface Area {
  sheet: number;
  row: number;
  column: number;
  width: number;
  height: number;
}

export enum BorderType {
  All = "All",
  Inner = "Inner",
  Outer = "Outer",
  Top = "Top",
  Right = "Right",
  Bottom = "Bottom",
  Left = "Left",
  CenterH = "CenterH",
  CenterV = "CenterV",
  None = "None",
}

export interface BorderArea {
  item: BorderItem;
  type: BorderType;
}

type ErrorType =
  | "REF"
  | "NAME"
  | "VALUE"
  | "DIV"
  | "NA"
  | "NUM"
  | "ERROR"
  | "NIMPL"
  | "SPILL"
  | "CALC"
  | "CIRC";

type OpCompareType =
  | "LessThan"
  | "GreaterThan"
  | "Equal"
  | "LessOrEqualThan"
  | "GreaterOrEqualThan"
  | "NonEqual";

type OpSumType = "Add" | "Minus";

type OpProductType = "Times" | "Divide";

interface ReferenceType {
  sheet: string | null;
  row: number;
  column: number;
  absolute_column: boolean;
  absolute_row: boolean;
}

interface ParsedReferenceType {
  column: number;
  row: number;
  absolute_column: boolean;
  absolute_row: boolean;
}

interface Reference {
  Reference: ReferenceType;
}

interface Range {
  Range: {
    sheet: string | null;
    left: ParsedReferenceType;
    right: ParsedReferenceType;
  };
}

export type TokenType =
  | "Illegal"
  | "Eof"
  | { Ident: string }
  | { String: string }
  | { Boolean: boolean }
  | { Number: number }
  | { ERROR: ErrorType }
  | { COMPARE: OpCompareType }
  | { SUM: OpSumType }
  | { PRODUCT: OpProductType }
  | "POWER"
  | "LPAREN"
  | "RPAREN"
  | "COLON"
  | "SEMICOLON"
  | "LBRACKET"
  | "RBRACKET"
  | "LBRACE"
  | "RBRACE"
  | "COMMA"
  | "BANG"
  | "PERCENT"
  | "AND"
  | Reference
  | Range;

export interface MarkedToken {
  token: TokenType;
  start: number;
  end: number;
}

export interface WorksheetProperties {
  name: string;
  color: string;
  sheet_id: number;
  state: string;
}

interface CellStyleFill {
  pattern_type: string;
  fg_color?: string;
  bg_color?: string;
}

interface CellStyleFont {
  u: boolean;
  b: boolean;
  i: boolean;
  strike: boolean;
  sz: number;
  color: string;
  name: string;
  family: number;
  scheme: string;
}

export interface BorderOptions {
  color: string;
  style: BorderStyle;
  border: BorderType;
}

export enum BorderStyle {
  Thin = "thin",
  Medium = "medium",
  Thick = "thick",
  Double = "double",
  Dotted = "dotted",
  SlantDashDot = "slantdashdot",
  MediumDashed = "mediumdashed",
  MediumDashDotDot = "mediumdashdotdot",
  MediumDashDot = "mediumdashdot",
}

interface BorderItem {
  style: string;
  color: string;
}

interface CellStyleBorder {
  diagonal_up?: boolean;
  diagonal_down?: boolean;
  left: BorderItem;
  right: BorderItem;
  top: BorderItem;
  bottom: BorderItem;
  diagonal: BorderItem;
}

export type VerticalAlignment =
  | "bottom"
  | "center"
  | "distributed"
  | "justify"
  | "top";

export type HorizontalAlignment =
  | "left"
  | "center"
  | "right"
  | "general"
  | "centerContinuous"
  | "distributed"
  | "fill"
  | "justify";

interface Alignment {
  horizontal: HorizontalAlignment;
  vertical: VerticalAlignment;
  wrap_text: boolean;
}

export interface CellStyle {
  read_only: boolean;
  quote_prefix: boolean;
  fill: CellStyleFill;
  font: CellStyleFont;
  border: CellStyleBorder;
  num_fmt: string;
  alignment?: Alignment;
}

export interface SelectedView {
  sheet: number;
  row: number;
  column: number;
  range: [number, number, number, number];
  top_row: number;
  left_column: number;
}

// type ClipboardData = {
//   [row: number]: {
//       [column: number]: ClipboardCell;
//   };
// };

// type ClipboardData = Record<string, Record <string, ClipboardCell>>;
type ClipboardData = Map<number, Map <number, ClipboardCell>>;

export interface ClipboardCell {
  text: string;
  style: CellStyle;
}

export interface Clipboard {
  csv: string;
  data: ClipboardData;
  range: [number, number, number, number];
}

export interface DefinedName {
  name: string;
  scope?: number;
  formula: string;
}

export interface FmtSettings {
  currency: string;
  currency_format: string;
  short_date: string;
  short_date_example: string;
  long_date: string;
  long_date_example: string;
  number_fmt: string;
  number_example: string;
}


export class Model {
    free(): void;
    [Symbol.dispose](): void;
    applyExternalDiffs(diffs: Uint8Array): void;
    autoFillColumns(source_area: Area, to_column: number): void;
    autoFillRows(source_area: Area, to_row: number): void;
    canRedo(): boolean;
    canUndo(): boolean;
    copyToClipboard(): Clipboard;
    deleteColumns(sheet: number, column: number, column_count: number): void;
    deleteDefinedName(name: string, scope?: number | null): void;
    deleteRows(sheet: number, row: number, row_count: number): void;
    deleteSheet(sheet: number): void;
    evaluate(): void;
    flushSendQueue(): Uint8Array;
    static from_bytes(bytes: Uint8Array, language_id: string): Model;
    getCellContent(sheet: number, row: number, column: number): string;
    getCellStyle(sheet: number, row: number, column: number): CellStyle;
    getCellType(sheet: number, row: number, column: number): number;
    getColumnWidth(sheet: number, column: number): number;
    getColumnsWithData(sheet: number, row: number): Int32Array;
    getDefinedNameList(): DefinedName[];
    getFirstNonEmptyInRowAfterColumn(sheet: number, row: number, column: number): number | undefined;
    /**
     * Gets Settings format info
     */
    getFmtSettings(): FmtSettings;
    getFormattedCellValue(sheet: number, row: number, column: number): string;
    getFrozenColumnsCount(sheet: number): number;
    getFrozenRowsCount(sheet: number): number;
    /**
     * Gets the language of the model
     */
    getLanguage(): string;
    getLastNonEmptyInRowBeforeColumn(sheet: number, row: number, column: number): number | undefined;
    /**
     * Gets the locale of the model
     */
    getLocale(): string;
    getName(): string;
    getRowHeight(sheet: number, row: number): number;
    getRowsWithData(sheet: number, column: number): Int32Array;
    getScrollX(): number;
    getScrollY(): number;
    getSelectedCell(): Int32Array;
    getSelectedSheet(): number;
    getSelectedView(): SelectedView;
    getShowGridLines(sheet: number): boolean;
    /**
     * Gets the timezone of the model
     */
    getTimezone(): string;
    getWorksheetsProperties(): WorksheetProperties[];
    hideSheet(sheet: number): void;
    insertColumns(sheet: number, column: number, column_count: number): void;
    insertRows(sheet: number, row: number, row_count: number): void;
    isValidDefinedName(name: string, scope: number | null | undefined, formula: string): void;
    moveColumn(sheet: number, column: number, delta: number): void;
    moveRow(sheet: number, row: number, delta: number): void;
    constructor(name: string, locale: string, timezone: string, language_id: string);
    newDefinedName(name: string, scope: number | null | undefined, formula: string): void;
    newSheet(): void;
    onAreaSelecting(target_row: number, target_column: number): void;
    onArrowDown(): void;
    onArrowLeft(): void;
    onArrowRight(): void;
    onArrowUp(): void;
    onExpandSelectedRange(key: string): void;
    onNavigateToEdgeInDirection(direction: string): void;
    onPageDown(): void;
    onPageUp(): void;
    onPasteStyles(styles: CellStyle[][]): void;
    pasteCsvText(area: Area, csv: string): void;
    pasteFromClipboard(source_sheet: number, source_range: [number, number, number, number], clipboard: ClipboardData, is_cut: boolean): void;
    pauseEvaluation(): void;
    rangeClearAll(sheet: number, start_row: number, start_column: number, end_row: number, end_column: number): void;
    rangeClearContents(sheet: number, start_row: number, start_column: number, end_row: number, end_column: number): void;
    rangeClearFormatting(sheet: number, start_row: number, start_column: number, end_row: number, end_column: number): void;
    redo(): void;
    renameSheet(sheet: number, name: string): void;
    resumeEvaluation(): void;
    setAreaWithBorder(area: Area, border_area: BorderArea): void;
    setColumnsWidth(sheet: number, column_start: number, column_end: number, width: number): void;
    setFrozenColumnsCount(sheet: number, count: number): void;
    setFrozenRowsCount(sheet: number, count: number): void;
    /**
     * Sets the language of the model
     */
    setLanguage(language: string): void;
    setLocale(locale: string): void;
    setName(name: string): void;
    setRowsHeight(sheet: number, row_start: number, row_end: number, height: number): void;
    setSelectedCell(row: number, column: number): void;
    setSelectedRange(start_row: number, start_column: number, end_row: number, end_column: number): void;
    setSelectedSheet(sheet: number): void;
    setSheetColor(sheet: number, color: string): void;
    setShowGridLines(sheet: number, show_grid_lines: boolean): void;
    setTimezone(timezone: string): void;
    setTopLeftVisibleCell(top_row: number, top_column: number): void;
    setUserInput(sheet: number, row: number, column: number, input: string): void;
    setWindowHeight(window_height: number): void;
    setWindowWidth(window_width: number): void;
    toBytes(): Uint8Array;
    undo(): void;
    unhideSheet(sheet: number): void;
    updateDefinedName(name: string, scope: number | null | undefined, new_name: string, new_scope: number | null | undefined, new_formula: string): void;
    updateRangeStyle(range: Area, style_path: string, value: string): void;
}

export function columnNameFromNumber(column: number): string;

/**
 * Gets all timezones
 */
export function getAllTimezones(): string[];

/**
 * Gets all supported locales
 */
export function getSupportedLocales(): string[];

/**
 * Return an array with a list of all the tokens from a formula
 * This is used by the UI to color them according to a theme.
 */
export function getTokens(formula: string): MarkedToken[];

export function quoteName(name: string): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_model_free: (a: number, b: number) => void;
    readonly columnNameFromNumber: (a: number) => [number, number, number, number];
    readonly getAllTimezones: () => [number, number];
    readonly getSupportedLocales: () => [number, number];
    readonly getTokens: (a: number, b: number) => [number, number, number];
    readonly model_applyExternalDiffs: (a: number, b: number, c: number) => [number, number];
    readonly model_autoFillColumns: (a: number, b: any, c: number) => [number, number];
    readonly model_autoFillRows: (a: number, b: any, c: number) => [number, number];
    readonly model_canRedo: (a: number) => number;
    readonly model_canUndo: (a: number) => number;
    readonly model_copyToClipboard: (a: number) => [number, number, number];
    readonly model_deleteColumns: (a: number, b: number, c: number, d: number) => [number, number];
    readonly model_deleteDefinedName: (a: number, b: number, c: number, d: number) => [number, number];
    readonly model_deleteRows: (a: number, b: number, c: number, d: number) => [number, number];
    readonly model_deleteSheet: (a: number, b: number) => [number, number];
    readonly model_evaluate: (a: number) => void;
    readonly model_flushSendQueue: (a: number) => [number, number];
    readonly model_from_bytes: (a: number, b: number, c: number, d: number) => [number, number, number];
    readonly model_getCellContent: (a: number, b: number, c: number, d: number) => [number, number, number, number];
    readonly model_getCellStyle: (a: number, b: number, c: number, d: number) => [number, number, number];
    readonly model_getCellType: (a: number, b: number, c: number, d: number) => [number, number, number];
    readonly model_getColumnWidth: (a: number, b: number, c: number) => [number, number, number];
    readonly model_getColumnsWithData: (a: number, b: number, c: number) => [number, number, number, number];
    readonly model_getDefinedNameList: (a: number) => [number, number, number];
    readonly model_getFirstNonEmptyInRowAfterColumn: (a: number, b: number, c: number, d: number) => [number, number, number];
    readonly model_getFmtSettings: (a: number) => [number, number, number];
    readonly model_getFormattedCellValue: (a: number, b: number, c: number, d: number) => [number, number, number, number];
    readonly model_getFrozenColumnsCount: (a: number, b: number) => [number, number, number];
    readonly model_getFrozenRowsCount: (a: number, b: number) => [number, number, number];
    readonly model_getLanguage: (a: number) => [number, number];
    readonly model_getLastNonEmptyInRowBeforeColumn: (a: number, b: number, c: number, d: number) => [number, number, number];
    readonly model_getLocale: (a: number) => [number, number];
    readonly model_getName: (a: number) => [number, number];
    readonly model_getRowHeight: (a: number, b: number, c: number) => [number, number, number];
    readonly model_getRowsWithData: (a: number, b: number, c: number) => [number, number, number, number];
    readonly model_getScrollX: (a: number) => [number, number, number];
    readonly model_getScrollY: (a: number) => [number, number, number];
    readonly model_getSelectedCell: (a: number) => [number, number];
    readonly model_getSelectedSheet: (a: number) => number;
    readonly model_getSelectedView: (a: number) => any;
    readonly model_getShowGridLines: (a: number, b: number) => [number, number, number];
    readonly model_getTimezone: (a: number) => [number, number];
    readonly model_getWorksheetsProperties: (a: number) => any;
    readonly model_hideSheet: (a: number, b: number) => [number, number];
    readonly model_insertColumns: (a: number, b: number, c: number, d: number) => [number, number];
    readonly model_insertRows: (a: number, b: number, c: number, d: number) => [number, number];
    readonly model_isValidDefinedName: (a: number, b: number, c: number, d: number, e: number, f: number) => [number, number];
    readonly model_moveColumn: (a: number, b: number, c: number, d: number) => [number, number];
    readonly model_moveRow: (a: number, b: number, c: number, d: number) => [number, number];
    readonly model_new: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => [number, number, number];
    readonly model_newDefinedName: (a: number, b: number, c: number, d: number, e: number, f: number) => [number, number];
    readonly model_newSheet: (a: number) => [number, number];
    readonly model_onAreaSelecting: (a: number, b: number, c: number) => [number, number];
    readonly model_onArrowDown: (a: number) => [number, number];
    readonly model_onArrowLeft: (a: number) => [number, number];
    readonly model_onArrowRight: (a: number) => [number, number];
    readonly model_onArrowUp: (a: number) => [number, number];
    readonly model_onExpandSelectedRange: (a: number, b: number, c: number) => [number, number];
    readonly model_onNavigateToEdgeInDirection: (a: number, b: number, c: number) => [number, number];
    readonly model_onPageDown: (a: number) => [number, number];
    readonly model_onPageUp: (a: number) => [number, number];
    readonly model_onPasteStyles: (a: number, b: any) => [number, number];
    readonly model_pasteCsvText: (a: number, b: any, c: number, d: number) => [number, number];
    readonly model_pasteFromClipboard: (a: number, b: number, c: any, d: any, e: number) => [number, number];
    readonly model_pauseEvaluation: (a: number) => void;
    readonly model_rangeClearAll: (a: number, b: number, c: number, d: number, e: number, f: number) => [number, number];
    readonly model_rangeClearContents: (a: number, b: number, c: number, d: number, e: number, f: number) => [number, number];
    readonly model_rangeClearFormatting: (a: number, b: number, c: number, d: number, e: number, f: number) => [number, number];
    readonly model_redo: (a: number) => [number, number];
    readonly model_renameSheet: (a: number, b: number, c: number, d: number) => [number, number];
    readonly model_resumeEvaluation: (a: number) => void;
    readonly model_setAreaWithBorder: (a: number, b: any, c: any) => [number, number];
    readonly model_setColumnsWidth: (a: number, b: number, c: number, d: number, e: number) => [number, number];
    readonly model_setFrozenColumnsCount: (a: number, b: number, c: number) => [number, number];
    readonly model_setFrozenRowsCount: (a: number, b: number, c: number) => [number, number];
    readonly model_setLanguage: (a: number, b: number, c: number) => [number, number];
    readonly model_setLocale: (a: number, b: number, c: number) => [number, number];
    readonly model_setName: (a: number, b: number, c: number) => void;
    readonly model_setRowsHeight: (a: number, b: number, c: number, d: number, e: number) => [number, number];
    readonly model_setSelectedCell: (a: number, b: number, c: number) => [number, number];
    readonly model_setSelectedRange: (a: number, b: number, c: number, d: number, e: number) => [number, number];
    readonly model_setSelectedSheet: (a: number, b: number) => [number, number];
    readonly model_setSheetColor: (a: number, b: number, c: number, d: number) => [number, number];
    readonly model_setShowGridLines: (a: number, b: number, c: number) => [number, number];
    readonly model_setTimezone: (a: number, b: number, c: number) => [number, number];
    readonly model_setTopLeftVisibleCell: (a: number, b: number, c: number) => [number, number];
    readonly model_setUserInput: (a: number, b: number, c: number, d: number, e: number, f: number) => [number, number];
    readonly model_setWindowHeight: (a: number, b: number) => void;
    readonly model_setWindowWidth: (a: number, b: number) => void;
    readonly model_toBytes: (a: number) => [number, number];
    readonly model_undo: (a: number) => [number, number];
    readonly model_unhideSheet: (a: number, b: number) => [number, number];
    readonly model_updateDefinedName: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => [number, number];
    readonly model_updateRangeStyle: (a: number, b: any, c: number, d: number, e: number, f: number) => [number, number];
    readonly quoteName: (a: number, b: number) => [number, number];
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __externref_drop_slice: (a: number, b: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
