// Grid.js
"use client";
import Cell from './Cell';

const Grid = ({ grid, width, toggleCell }) => {
  return (
    <div 
    className="grid gap-1 mx-auto" 
    style={{
      gridTemplateColumns: `repeat(${width}, minmax(30px, 5vw))`, // Use `minmax` for responsive sizing
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
  );
};

export default Grid;