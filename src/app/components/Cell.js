const Cell = ({ isFilled, onClick }) => {
    return (
      <div
        className={`w-8 h-8 cursor-pointer border ${isFilled ? 'bg-green-600' : 'bg-blue-500'}`} // Tailwind styles
        onClick={onClick}
      />
    );
  };
  
  export default Cell;
  