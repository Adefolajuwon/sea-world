const useIslandCounter = (grid) => {
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
            const stack = [[row, col]];
  
            while (stack.length > 0) {
              const [currentRow, currentCol] = stack.pop();
  
              if (!visited[currentRow][currentCol]) {
                visited[currentRow][currentCol] = true;
  
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
  
    return { countIslands };
  };
  
  export default useIslandCounter;
  