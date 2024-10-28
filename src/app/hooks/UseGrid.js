import { useState, useEffect } from 'react';
import { createGrid, toggleCellUtil } from '../../../utils/GridUtils';

const useGrid = (initialWidth = 10, initialHeight = 10) => {
  const [width, setWidth] = useState(initialWidth);
  const [height, setHeight] = useState(initialHeight);
  const [grid, setGrid] = useState(() => createGrid(initialWidth, initialHeight)); 

  useEffect(() => {
    setGrid((prevGrid) => {
      const newGrid = createGrid(width, height);
  
      for (let row = 0; row < Math.min(height, prevGrid.length); row++) {
        for (let col = 0; col < Math.min(width, prevGrid[0].length); col++) {
          newGrid[row][col] = prevGrid[row][col];
        }
      }
  
      return newGrid;
    });
  }, [width, height]);

  const toggleCell = (rowIndex, colIndex) => {
    setGrid((prevGrid) => toggleCellUtil(prevGrid, rowIndex, colIndex));
  };

  const countFilledCells = () => {
   return grid.flat().filter(Boolean).length;
  };

  return { grid, width, height, setWidth, setHeight, toggleCell, countFilledCells };
};

export default useGrid;
