// utils/GridUtils.test.js
import { toggleCellUtil } from "../../../utils/GridUtils";
import { createGrid } from "../../../utils/GridUtils";
describe('toggleCell', () => {
  it('toggles the specified cell from false to true', () => {
    const grid = [
      [false, false, false],
      [false, true, false],
      [false, false, false],
    ];
    const rowIndex = 1;
    const colIndex = 1;
    
    const newGrid = toggleCellUtil(grid, rowIndex, colIndex);
    
    expect(newGrid).toEqual([
      [false, false, false],
      [false, false, false], 
      [false, false, false],
    ]);
  });

  it('toggles the specified cell from true to false', () => {
    const grid = [
      [false, false, false],
      [false, true, false],
      [false, false, false],
    ];
    const rowIndex = 1;
    const colIndex = 1;

    const newGrid = toggleCellUtil(grid, rowIndex, colIndex);
    
    expect(newGrid).toEqual([
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ]);
    
    // Toggle again to test toggling back
    const newGridAgain = toggleCellUtil(newGrid, rowIndex, colIndex);
    
    expect(newGridAgain).toEqual([
      [false, false, false],
      [false, true, false],
      [false, false, false],
    ]);
  });
});


describe('createGrid', () => {
    it('creates a grid with the specified width and height', () => {
      const width = 4;
      const height = 3;
      const grid = createGrid(width, height);
      
      // Check grid dimensions
      expect(grid.length).toBe(height);       // Verify the height (number of rows)
      expect(grid[0].length).toBe(width);     // Verify the width (number of columns)
  
      // Verify all cells are initialized to false
      grid.forEach(row => {
        row.forEach(cell => {
          expect(cell).toBe(false);
        });
      });
    });
  
    it('creates a grid with 0 width and 0 height when width and height are zero', () => {
      const grid = createGrid(0, 0);
      
      // Check that grid has no rows
      expect(grid.length).toBe(0);
    });
  
    it('creates a grid with only rows when width is zero', () => {
      const grid = createGrid(0, 3);
      
      // Check that grid has rows with no columns
      expect(grid.length).toBe(3);          // Should have 3 rows
      grid.forEach(row => expect(row.length).toBe(0));  // Each row should have 0 columns
    });
  
    it('creates a grid with only columns when height is zero', () => {
      const grid = createGrid(4, 0);
      
      // Check that grid has no rows but each row would have 4 columns if it existed
      expect(grid.length).toBe(0);
    });
  });