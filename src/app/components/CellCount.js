// CellCount.js
const CellCount = ({ filledCount }) => {
    return (
      <div className="text-center mb-4">
        <h2 className="text-lg font-bold">Filled Cells: <span className="text-green-600">{filledCount}</span></h2>
      </div>
    );
  };
  
  export default CellCount;
  