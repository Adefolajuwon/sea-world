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
        row.map((filled, cIndex) => (rIndex === rowIndex && cIndex === colIndex ? !filled : filled))
      )
    );
  };

  const countFilledCells = () => {
    return grid.flat().filter((cell) => cell).length;
  };

  const countIslands = () => {
    const rows = grid.length;
    const cols = grid[0].length;
    let islandCount = 0;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    const directions = [
      [1, 0],   // down
      [-1, 0],  // up
      [0, 1],   // right
      [0, -1],  // left
    ];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (grid[row][col] && !visited[row][col]) {
          islandCount++;

          // Use a stack to perform iterative DFS
          const stack = [[row, col]];

          while (stack.length > 0) {
            const [currentRow, currentCol] = stack.pop();

            if (!visited[currentRow][currentCol]) {
              visited[currentRow][currentCol] = true;

              // Push all valid, unvisited neighbors
              for (const [dx, dy] of directions) {
                const newRow = currentRow + dx;
                const newCol = currentCol + dy;

                if (
                  newRow >= 0 &&
                  newRow < rows &&
                  newCol >= 0 &&
                  newCol < cols &&
                  grid[newRow][newCol] &&
                  !visited[newRow][newCol]
                ) {
                  stack.push([newRow, newCol]);
                }
              }
            }
          }
        }
      }
    }

    return islandCount;
  };

  return { grid, width, height, setWidth, setHeight, toggleCell, countFilledCells, countIslands };
};

export default useGrid;
