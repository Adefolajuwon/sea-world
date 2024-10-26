// CellCount.js
const IslandCounter = ({ currentIsland }) => {
    return (
      <div className="text-center mb-4 text-black">
        <h2 className="text-lg font-bold">Current Island: <span className="text-green-600">{currentIsland}</span></h2>
      </div>
    );
  };
  
  export default IslandCounter;
  