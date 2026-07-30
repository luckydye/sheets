# Patches to the vendored IronCalc UI

`scripts/build-ironcalc.sh` applies every `*.patch` in this directory (in name
order, with `git apply`) to the freshly cloned IronCalc source at tag
`v0.7.1` before building `vendor/ironcalc-workbook`. Without them, running
`task vendor` would silently drop the fixes below.

- **`0001-smooth-scrolling.patch`** — pixel-smooth grid scrolling.
  Upstream only stores the top-left visible *cell*, so the grid jumped a whole
  row/column per scroll event (very noticeable horizontally, where columns are
  wide). The patch keeps the leftover pixels as a sub-cell offset next to the
  top-left cell (`WorksheetCanvas.scrollOffset`, owned by `<Worksheet>` so it
  survives the canvas being recreated on every render) and shifts the cell
  render, the headers and hit-testing by it. Panes and outlines are clipped,
  which they had to be anyway once a row/column can be partially scrolled.

- **`0002-scroll-performance.patch`** — makes scrolling cost the same anywhere in
  the sheet. Applies on top of `0001`. Three things were linear in the distance
  from A1, on *every* scroll event:
  - Turning a pixel position into a cell (and back) added up every row/column
    before it, one wasm call each — 214k calls per event around row 200_000.
    Now it walks from an anchor ("column C starts at x") that the model seeds and
    each scroll advances by a few pixels. Re-seeded on every render, and
    explicitly on row/column resize (which doesn't re-render).
  - Text from off-screen cells that spills into the viewport: finding where such
    a cell *is* walked every column in between. Now the walk stops as soon as it
    is further away than the text could stretch.
  - `getScrollX`/`getScrollY` (the same sum, in Rust) were called per scroll
    event; the anchor knows the answer.

  Plus: one render per animation frame instead of one per scroll event, and cell
  styles / the visible range are memoised per frame (each was fetched several
  times while drawing one).

To rework a patch: clone `ironcalc` at the tag, `git apply` the patches up to the
one you want, edit, then `git diff -- webapp/IronCalc/src > patches/<name>.patch`
(`git commit` the earlier ones first so the diff only contains your change).
