// utils/GridUtils.test.js
import { toggleCellUtil, createGrid } from "../../../utils/GridUtils";

describe('toggleCellUtil', () => {
  const setupGrid = () => [
    [false, false, false],
    [false, true, false],
    [false, false, false],
  ];

  it('toggles the specified cell from false to true', () => {
    const grid = setupGrid();
    const toggledGrid = toggleCellUtil(grid, 1, 1);
    
    expect(toggledGrid[1][1]).toBe(false); 
  });

  it('toggles the specified cell from true to false and back again', () => {
    const grid = setupGrid();
    const toggledGrid = toggleCellUtil(grid, 1, 1);
    expect(toggledGrid[1][1]).toBe(false);

    const toggledBackGrid = toggleCellUtil(toggledGrid, 1, 1);
    expect(toggledBackGrid[1][1]).toBe(true);
  });
});

describe('createGrid', () => {
  it('creates a grid with specified dimensions and initializes all cells to false', () => {
    const width = 4;
    const height = 3;
    const grid = createGrid(width, height);
    
    expect(grid.length).toBe(height);
    expect(grid.every(row => row.length === width)).toBe(true);
    expect(grid.flat().every(cell => cell === false)).toBe(true);
  });

  it('creates an empty grid when width and height are zero', () => {
    expect(createGrid(0, 0)).toEqual([]);
  });

  it('creates rows with no columns when width is zero', () => {
    const grid = createGrid(0, 3);
    expect(grid.length).toBe(3);
    expect(grid.every(row => row.length === 0)).toBe(true);
  });

  it('creates a grid with no rows when height is zero', () => {
    expect(createGrid(4, 0)).toEqual([]);
  });
});
