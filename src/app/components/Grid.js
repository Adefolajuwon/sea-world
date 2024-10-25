"use client";
import useGrid from '../hooks/UseGrid';
import Cell from './Cell';

const Grid = () => {
  const { grid, width, height, setWidth, setHeight, toggleCell } = useGrid();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-white border border-gray-400 rounded-lg shadow-lg p-6 w-full max-w-2xl">
        <h1 className="text-center text-pink-500 text-2xl mb-4">My Grid</h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(20px,1fr))] gap-0.5"> 
          {grid.flat().map((cell, index) => (
            <Cell
              key={index}
              isFilled={cell}
              onClick={() => toggleCell(Math.floor(index / width), index % width)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grid;
