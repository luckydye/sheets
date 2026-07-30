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

- **`0002-text-wrapping-cost.patch`** — stops re-wrapping text on every frame.
  Wrapping a cell measures it word by word, so a cell with a few thousand
  characters costs thousands of canvas text measurements — and the grid redrew
  every visible cell on every scroll event. In a Chrome CPU profile of a workbook
  whose cells hold up to 32k characters with `wrapText` on, `measureText` alone
  was 30% of all time. Three changes:
  - The wrapped lines of a cell (and their widths) are cached and reused across
    scroll frames. Only a scroll may reuse them — every other render re-wraps,
    since it may follow an edit.
  - Text hanging from the top of a cell is clipped at its bottom edge, so
    wrapping stops once the cell is full instead of chewing through the rest.
  - A line is measured whole before wrapping it word by word (the common case is
    a line that already fits), but only its first 512 characters — enough to know
    that a very long one does not fit.

  **One rendering difference**, worth knowing about: when a cell contains a line
  wider than the column *below* what fits in it — a long unbroken token, say a
  URL — upstream used that invisible line to suppress the neighbouring cell's
  left border. With wrapping now bounded, that border is drawn. It is a 1px
  gridline; screenshots of the rest of the grid are pixel-identical. Dropping the
  `lineBudget` in `computeCellText` (make it always `POSITIVE_INFINITY`) restores
  upstream's output exactly, at the cost of a stall whenever a text-heavy cell
  first scrolls into view.

## Removed

A third patch made scrolling cost the same anywhere in the sheet: converting a
pixel position to a cell added up every row/column before it, one wasm call each,
so a scroll event around row 200_000 made 214k of them. It worked (57ms → 8ms per
frame that far out) but only mattered in the empty far reaches of the grid, so it
was dropped as not worth the patch surface. It is in the history if the need comes
back: `git show e8df78d -- patches/0002-scroll-performance.patch`.

To rework a patch: clone `ironcalc` at the tag, `git apply` the patches up to the
one you want, edit, then `git diff -- webapp/IronCalc/src > patches/<name>.patch`
(`git commit` the earlier ones first so the diff only contains your change).
