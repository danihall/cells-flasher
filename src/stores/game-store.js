import { defineStore } from "pinia";
import { computeResult } from "../helpers/computeResult";

const MIN_CELLS_PER_LINE = 6;
const MAX_CELLS_PER_LINE = 21;
const makeCellsList = (cells_per_line) =>
  Array.from({ length: Math.pow(cells_per_line, 2) }, () => null);

const gameStore = defineStore({
  id: "gameStore",
  state: () => ({
    game_started: false,
    round_is_active: true,
    cells_per_line: MIN_CELLS_PER_LINE,
    cells: makeCellsList(MIN_CELLS_PER_LINE),
    cells_filled: 0,
    should_draw_x: true,
    result: {
      winner: 0,
      coordinates: [],
    },
  }),
  actions: {
    startGame() {
      this.game_started = true;
    },
    update(cellIndex) {
      if (!this.cells[cellIndex]) {
        this.cells[cellIndex] = this.should_draw_x ? "X" : "O";
        this.cells_filled = this.cells.filter(Boolean).length;
        this.should_draw_x = !this.should_draw_x;
        this.result.coordinates = computeResult(
          this.cells,
          this.cells_per_line
        );
        this.result.winner = this.result.coordinates.length;
      }
    },
    changeCellsPerLine(cells_per_line) {
      this.cells_per_line = Number(cells_per_line);
      this.reset();
    },
    reset() {
      this.round_is_active = true;
      this.cells = makeCellsList(this.cells_per_line);
      this.cells_filled = 0;
      this.should_draw_x = true;
      this.result.winner = 0;
      this.result.coordinates.length = 0;
    },
  },
});

export { gameStore, MIN_CELLS_PER_LINE, MAX_CELLS_PER_LINE };
