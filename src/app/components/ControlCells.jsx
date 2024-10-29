import { useState } from 'react';

const ControlCells = ({ width, height, setWidth, setHeight }) => {
  const [newWidth, setNewWidth] = useState(width);
  const [newHeight, setNewHeight] = useState(height);

  const handleApply = () => {
    setWidth(newWidth);
    setHeight(newHeight);
  };

  return (
<div className="mb-4 flex flex-col sm:flex-row gap-4">
  <label className="flex flex-col w-full sm:w-auto">
    Width:
    <input
      type="number"
      value={newWidth}
      onChange={(e) => setNewWidth(Number(e.target.value))}
      className="border rounded px-2 py-1 mt-1 w-full max-w-full"
    />
  </label>
  <label className="flex flex-col w-full sm:w-auto">
    Height:
    <input
      type="number"
      value={newHeight}
      onChange={(e) => setNewHeight(Number(e.target.value))}
      className="border rounded px-2 py-1 mt-1 w-full max-w-full"
    />
  </label>
  <button onClick={handleApply} className="bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto">
    Apply
  </button>
</div>

  );
};

export default ControlCells;