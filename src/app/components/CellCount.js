// CellCount.js
const CellCount = ({ filledCount }) => {
  return (
    <div className="text-center mb-4 text-white">
      <h2 className="text-lg font-bold">Filled Cells: <span className="text-green-400">{filledCount}</span></h2>
    </div>
  );
};

export default CellCount;