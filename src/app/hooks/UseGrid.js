import { useState, useEffect } from 'react';

const createGrid = (width, height) => {
  return Array.from({ length: height }, () => Array.from({ length: width }, () => false));
};

const useGrid = (initialWidth = 10, initialHeight = 10) => {
  const [width, setWidth] = useState(initialWidth);
  const [height, setHeight] = useState(initialHeight);
  const [grid, setGrid] = useState(createGrid(width, height));

  useEffect(() => {
    // Update grid dimensions without resetting filled cells
    setGrid((prevGrid) => {
      const newGrid = createGrid(width, height);
      for (let row = 0; row < Math.min(height, prevGrid.length); row++) {
        for (let col = 0; col < Math.min(width, prevGrid[row].length); col++) {
          newGrid[row][col] = prevGrid[row][col];
        }
      }
      return newGrid;
    });
  }, [width, height]);

  const toggleCell = (rowIndex, colIndex) => {
    setGrid((prevGrid) =>
      prevGrid.map((row, rIndex) =>
        row.map((cell, cIndex) => (rIndex === rowIndex && cIndex === colIndex ? !cell : cell))
      )
    );
  };

  return { grid, width, height, setWidth, setHeight, toggleCell };
};

export default useGrid;
