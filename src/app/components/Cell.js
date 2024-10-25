const Cell = ({ isLand, onClick }) => {
    return (
      <div
        className={`w-8 h-8 cursor-pointer ${isLand ? 'bg-green-600' : 'bg-blue-500'} border`} // Add border for visibility
        onClick={onClick}
      />
    );
  };
  
  export default Cell;
  