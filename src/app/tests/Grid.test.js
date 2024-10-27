// toggleCell.test.js

import { toggleCell } from './useGrid'; // Adjust the import path based on your project structure

describe('toggleCell', () => {
  test('toggles a cell in the grid', () => {
    // Mock initial grid
    const initialGrid = [
      [false, false, false],
      [false, true, false],
      [false, false, false],
    ];
    const rowIndex = 1;
    const colIndex = 1;

    // Expected result after toggling
    const expectedGrid = [
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ];

    // Call toggleCell on the grid
    const updatedGrid = toggleCell(initialGrid, rowIndex, colIndex);

    // Assert the updated grid matches the expected result
    expect(updatedGrid).toEqual(expectedGrid);
  });
});
