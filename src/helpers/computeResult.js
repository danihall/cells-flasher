import { cellsLineChecker } from "./cellsLineChecker";
/**
 * @param {Array} cells
 * @param {number} cells_per_line
 * @returns {Array}
 */
const computeResult = (cells, cells_per_line) => {
  let winning_lines = [];
  const params = {
    i: 0,
    cells,
    cells_per_line,
  };

  cells.forEach((cell, index, array) => {
    if (!cell || index >= array.length - 2) {
      return;
    }

    params.i = index;

    [
      cellsLineChecker.horizontal(params),
      cellsLineChecker.vertical(params),
      cellsLineChecker.diagonalRight(params),
      cellsLineChecker.diagonalLeft(params),
    ].forEach((line) => line.length && winning_lines.push(line));
  });

  return winning_lines;
};

export { computeResult };
