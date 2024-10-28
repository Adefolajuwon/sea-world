// IslandCounter.js
const IslandCounter = ({ currentIsland }) => {
  return (
    <div className="text-center mb-4 text-white">
      <h2 className="text-lg font-bold">Current Island: <span className="text-green-400">{currentIsland}</span></h2>
    </div>
  );
};

export default IslandCounter;