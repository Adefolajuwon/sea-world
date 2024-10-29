import React, { useState, useEffect } from 'react';

const UserInstructions = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 text-gray-300 p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-center text-gray-400 text-2xl mb-4">Instructions</h2>
        <p className="text-sm mb-4">
          Click on the cells to toggle between ocean (blue) and land (green/brown).
        </p>
        <p className="text-sm mb-4">
          Use the controls to change the size of the grid. The grid will retain its state.
        </p>
        <p className="text-sm mb-4">
          Filled cells connected in the X or Y axis form islands, which will be counted and displayed.
        </p>
        <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full">
          Okay
        </button>
      </div>
    </div>
  );
};

export default UserInstructions