export const createGrid = (width, height) => {
    return Array.from({ length: height }, () => Array.from({ length: width }, () => false));
  };


  export const toggleCell = (grid, rowIndex, colIndex) => {
    return grid.map((row, rIndex) =>
      row.map((filled, cIndex) => (rIndex === rowIndex && cIndex === colIndex ? !filled : filled))
    );
  };