// World.js
"use client";
import React, { useState, useEffect } from 'react';
import CellCount from '../components/CellCount';
import Grid from '../components/Grid';
import IslandCounter from '../components/IslandCounter';
import ControlCells from '../components/ControlCells';
import useIslandCounter from '../hooks/useIslandHook';
import useGrid from '../hooks/useGridHook';
import Notification from '../components/Notification';
import UserInstructions from '../components/UserInstruction';

const World = () => {
  const [notification, setNotification] = useState('');
  const { grid, width, height, toggleCell, countFilledCells, setWidth, setHeight } = useGrid();
  const [showInstructions, setShowInstructions] = useState(false);

  const countIslands = useIslandCounter(grid);

  useEffect(() => {
    // Check if sessionStorage is available and if instructions have been seen in this session
    if (typeof window !== 'undefined') {
      const hasSeenInstructions = sessionStorage.getItem('hasSeenInstructions');
      if (!hasSeenInstructions) {
        setShowInstructions(true);
      }
    }
  }, []);

  const handleInstructionsClose = () => {
    sessionStorage.setItem('hasSeenInstructions', 'true'); // Set session flag
    setShowInstructions(false);
  };

  const handleCellToggle = (row, col) => {
    toggleCell(row, col);
    setNotification('Cell toggled!');
    const timeout = setTimeout(() => setNotification(''), 2000); // Clear notification after 2 seconds
    
    return () => clearTimeout(timeout); // Clean up timeout on component unmount
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800 px-4 sm:px-2">
      {/* Show the splash card with instructions if needed */}
      {showInstructions && <UserInstructions onClose={handleInstructionsClose} />}

      <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-lg p-6 w-full max-w-lg mx-4">
        <h1 className="text-center text-gray-400 text-2xl sm:text-3xl mb-4">Sea World</h1>
        
        <ControlCells width={width} height={height} setWidth={setWidth} setHeight={setHeight} />

        <Grid grid={grid} width={width} toggleCell={handleCellToggle} />

        <CellCount filledCount={countFilledCells()} />

        <IslandCounter currentIsland={countIslands} />
        <Notification message={notification} aria-live="assertive" />
      </div>
    </div>
  );
};

export default World;
