import React, { useEffect, useState } from 'react';

const UsageTip = () => {
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("showTipOnce")) {
      setShowTip(true);
      localStorage.setItem("showTipOnce", "true"); // Set this only for the session
    }
  }, []);

  return (
    <div
      className="hover-target"
      onMouseEnter={() => setShowTip(false)} // Hide tip on first hover
    >
      {showTip && <div className="usage-tip">Hover to see functionality!</div>}
    </div>
  );
};

export default UsageTip;
