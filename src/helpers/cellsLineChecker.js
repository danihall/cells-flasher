const cellsLineChecker = {
  _check(indexes, cells) {
    return (
      cells[indexes[0]] === cells[indexes[1]] &&
      cells[indexes[1]] === cells[indexes[2]] &&
      indexes
    );
  },
  horizontal({ i, cells }) {
    const indexes = [i, i + 1, i + 2];
    return this._check(indexes, cells);
  },
  vertical({ i, cells_per_line, cells }) {
    const indexes = [i, i + cells_per_line, i + cells_per_line * 2];
    return this._check(indexes, cells);
  },
  diagonalRight({ i, cells_per_line, cells }) {
    if (cells_per_line - (i % cells_per_line) < 3) {
      return false;
    }
    const indexes = [i, i + cells_per_line + 1, i + cells_per_line * 2 + 2];
    return this._check(indexes, cells);
  },
  diagonalLeft({ i, cells_per_line, cells }) {
    if (i % cells_per_line < 2) {
      return false;
    }
    const indexes = [i, i + cells_per_line - 1, i + cells_per_line * 2 - 2];
    return this._check(indexes, cells);
  },
};

export { cellsLineChecker };
