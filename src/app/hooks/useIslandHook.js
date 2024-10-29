const useIslandCounter = (grid) => {
  const countIslands = () => {
      if (!grid.length || !grid[0].length) return 0; // Handle empty grid

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
                  // Found an unvisited land cell; increment the island count
                  islandCount++;
                  const stack = [[row, col]]; // Start DFS from this cell

                  while (stack.length > 0) {
                      const [currentRow, currentCol] = stack.pop();

                      if (!visited[currentRow][currentCol]) {
                          visited[currentRow][currentCol] = true; // Mark as visited

                          // Explore all four directions (vertical and horizontal)
                          for (const [dx, dy] of directions) {
                              const newRow = currentRow + dx;
                              const newCol = currentCol + dy;

                              // Ensure the new cell is within bounds, is land, and not yet visited
                              if (
                                  newRow >= 0 &&
                                  newRow < rows &&
                                  newCol >= 0 &&
                                  newCol < cols &&
                                  grid[newRow][newCol] && // It's land
                                  !visited[newRow][newCol] // Not visited yet
                              ) {
                                  stack.push([newRow, newCol]); // Add to stack for further exploration
                              }
                          }
                      }
                  }
              }
          }
      }

      return islandCount;
  };

  return countIslands();
};

export default useIslandCounter;
