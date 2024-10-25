"use client";
import useGrid from '../hooks/UseGrid';
import Cell from './Cell';

const Grid = () => {
  const { grid, width, height, setWidth, setHeight, toggleCell } = useGrid();
  return (
    <div>
{/* <ControlPanel width={width} height={height} setWidth={setWidth} setHeight={setHeight} /> */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(30px,1fr))] gap-2 bg-red-100">
        {grid.flat().map((cell, index) => (
          <Cell
            key={index}
            isLand={cell}
            onClick={() => toggleCell(Math.floor(index / width), index % width)} // Toggle using index
          />
        ))}
      </div>
    </div>
  );
};

export default Grid;
