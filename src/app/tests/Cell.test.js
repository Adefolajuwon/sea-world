// utils/GridUtils.test.js
import { toggleCellUtil } from "../../../utils/GridUtils";
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
      [false, false, false], // The cell at (1, 1) should be toggled to false
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
      [false, false, false], // The cell at (1, 1) should be toggled to false
      [false, false, false],
    ]);
    
    // Toggle again to test toggling back
    const newGridAgain = toggleCellUtil(newGrid, rowIndex, colIndex);
    
    expect(newGridAgain).toEqual([
      [false, false, false],
      [false, true, false], // The cell at (1, 1) should be toggled back to true
      [false, false, false],
    ]);
  });
});
