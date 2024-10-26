import { useState } from 'react';
import useGrid from './useGrid'; // Import the useGrid hook

const ControlCells = () => {
  const { width, height, setWidth, setHeight } = useGrid(); // Use the useGrid hook

  const [newWidth, setNewWidth] = useState(width);
  const [newHeight, setNewHeight] = useState(height);

  const handleApply = () => {
    setWidth(newWidth);
    setHeight(newHeight);
  };

  return (
    <div className="mb-4 flex gap-4">
      <label>
        Width:
        <input
          type="number"
          value={newWidth}
          onChange={(e) => setNewWidth(Number(e.target.value))}
          className="border rounded px-2 py-1 mx-2"
        />
      </label>
      <label>
        Height:
        <input
          type="number"
          value={newHeight}
          onChange={(e) => setNewHeight(Number(e.target.value))}
          className="border rounded px-2 py-1 mx-2"
        />
      </label>
      <button onClick={handleApply} className="bg-blue-500 text-white px-3 py-1 rounded">
        Apply
      </button>
    </div>
  );
};

export default ControlCells;
