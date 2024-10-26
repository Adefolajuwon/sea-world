export const createGrid = (width, height) => {
    return Array.from({ length: height }, () => Array.from({ length: width }, () => false));
  };
  
 export const countFilledCells = () => {
    return grid.flat().filter((cell) => cell).length;
  };