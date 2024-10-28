const Cell = ({ isFilled, onClick }) => {
    return (
      <div
      // Generate a random number between 0 and 1 if it greater than 0.5 change to green
      className={`w-8 h-8 cursor-pointer border 
        ${isFilled ? (Math.random() > 0.5 ? 'bg-green-700' : 'bg-amber-950') : 'bg-blue-600'}`}
        onClick={onClick}
      />
    );
  };
  
export default Cell;
  