// World.js
"use client";
import React, { useState } from 'react';
import CellCount from '../components/CellCount';
import Grid from '../components/Grid';
import IslandCounter from '../components/IslandCounter';
import ControlCells from '../components/ControlCells';

const World = () => {
  const { grid, width, height, toggleCell, countFilledCells, countIslands, setWidth, setHeight } = useGrid();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-white border border-gray-400 rounded-lg shadow-lg p-6 w-full max-w-2xl">
        <h1 className="text-center text-pink-500 text-2xl mb-4">My Grid</h1>
        
        <ControlCells width={width} height={height} setWidth={setWidth} setHeight={setHeight} />
        
        <Grid grid={grid} width={width} toggleCell={toggleCell} />
        
        <CellCount filledCount={countFilledCells()} />
        <IslandCounter currentIsland={countIslands()} />
      </div>
    </div>
  );
};

export default World;
