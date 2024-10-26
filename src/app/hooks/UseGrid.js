import { useState, useEffect } from 'react';
import { createGrid } from '../../../utils/GridUtils';
import useIslandCounter from './UseIsland';

const useGrid = (initialWidth = 10, initialHeight = 10) => {
  const [width, setWidth] = useState(initialWidth);
  const [height, setHeight] = useState(initialHeight);
  const [grid, setGrid] = useState(createGrid(width, height));

  const { countIslands } = useIslandCounter(grid);

  useEffect(() => {
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
        row.map((filled, cIndex) => (rIndex === rowIndex && cIndex === colIndex ? !filled : filled))
      )
    );
  };

  const countFilledCells = () => {
    return grid.flat().filter((cell) => cell).length;
  };

  return { grid, width, height, setWidth, setHeight, toggleCell, countFilledCells, countIslands };
};

export default useGrid;
