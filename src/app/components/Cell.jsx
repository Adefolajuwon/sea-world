// Cell.js
const Cell = ({ isFilled, onClick }) => {
  return (
    <div
      className={`w-8 h-8 cursor-pointer border border-gray-600 
        ${isFilled ? (Math.random() > 0.5 ? 'bg-green-700' : 'bg-amber-950') : 'bg-blue-600'}`}
      onClick={onClick}
    />
  );
};

export default Cell;