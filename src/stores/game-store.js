import { defineStore } from "pinia";
import { computeResult } from "../helpers/computeResult";

const MIN_CELLS_PER_LINE = 3;
const MAX_CELLS_PER_LINE = 8;
const makeCellsList = (cells_per_line) =>
  Array.from({ length: Math.pow(cells_per_line, 2) }, () => null);

const gameStore = defineStore({
  id: "gameStore",
  state: () => ({
    cells_per_line: MIN_CELLS_PER_LINE,
    cells: makeCellsList(MIN_CELLS_PER_LINE),
    all_cells_filled: false,
    should_draw_x: true,
    result: [],
  }),
  getters: {
    hasEmptyCells() {
      return this.cells.some((cell) => cell === null);
    },
  },
  actions: {
    update(cellIndex) {
      if (!this.cells[cellIndex]) {
        this.cells[cellIndex] = this.should_draw_x ? "X" : "O";
        this.all_cells_filled = !this.hasEmptyCells;
        this.should_draw_x = !this.should_draw_x;
        this.result = computeResult(this.cells, this.cells_per_line);
      }
    },
    changeCellsPerLine(cells_per_line) {
      this.cells_per_line = Number(cells_per_line);
      this.reset();
    },
    reset() {
      this.cells = makeCellsList(this.cells_per_line);
      this.all_cells_filled = false;
      this.should_draw_x = true;
      this.result = [];
    },
  },
});

export { gameStore, MIN_CELLS_PER_LINE, MAX_CELLS_PER_LINE };
