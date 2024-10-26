"use client";
import Grid from './components/Grid';
import useGrid from './hooks/UseGrid';
import CellCount from './components/CellCount';
import IslandCounter from './components/IslandCounter';
import ControlCells from './components/ControlCells';

const MainPage = () => {
  const { grid, width, height, toggleCell, countFilledCells, countIslands, setWidth, setHeight } = useGrid();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-white border border-gray-400 rounded-lg shadow-lg p-6 w-full max-w-2xl">
        <h1 className="text-center text-pink-500 text-2xl mb-4">My Grid</h1>
        
        {/* Add ControlCells for grid dimension adjustments */}
        <ControlCells width={width} height={height} setWidth={setWidth} setHeight={setHeight} />
        
        {/* Display the grid */}
        <Grid grid={grid} width={width} toggleCell={toggleCell} />
        
        {/* Display filled cell count and island count */}
        <CellCount filledCount={countFilledCells()} />
        <IslandCounter currentIsland={countIslands()} />
      </div>
    </div>
  );
};

export default MainPage;
