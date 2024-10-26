"use client";
import useGrid from '../hooks/UseGrid';
import Cell from './Cell';
import CellCount from './CellCount';
import IslandCounter from './IslandCounter';

const Grid = () => {
  const { grid, width, toggleCell, countFilledCells, countIslands } = useGrid();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-white border border-gray-400 rounded-lg shadow-lg p-6 w-full max-w-2xl">
        <h1 className="text-center text-pink-500 text-2xl mb-4">My Grid</h1>
        <div 
          className="grid gap-0.5 justify-center mx-auto" 
          style={{
            gridTemplateColumns: `repeat(${width}, 30px)`,
          }}
        > 
          {grid.flat().map((cell, index) => (
            <Cell
              key={index}
              isFilled={cell}
              onClick={() => toggleCell(Math.floor(index / width), index % width)}
            />
          ))}
        </div>
        <CellCount filledCount={countFilledCells()} /> 
        <IslandCounter currentIsland={countIslands()}/>
      </div>
    </div>
  );
};

export default Grid;
