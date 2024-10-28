// World.js
"use client";
import React from 'react';
import CellCount from '../components/CellCount';
import Grid from '../components/Grid';
import IslandCounter from '../components/IslandCounter';
import ControlCells from '../components/ControlCells';
import useIslandCounter from '../hooks/UseIsland';
import useGrid from '../hooks/UseGrid';

const World = () => {
  const { grid, width, height, toggleCell, countFilledCells, setWidth, setHeight } = useGrid();
  const countIslands = useIslandCounter(grid); 

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-lg p-6 w-full max-w-2xl">
        <h1 className="text-center text-pink-400 text-3xl mb-4">My Grid</h1>
        
        <ControlCells width={width} height={height} setWidth={setWidth} setHeight={setHeight} />
        
        <Grid grid={grid} width={width} toggleCell={toggleCell} />
        
        <CellCount filledCount={countFilledCells()} />
        <IslandCounter currentIsland={countIslands} />
      </div>
    </div>
  );
};

export default World;