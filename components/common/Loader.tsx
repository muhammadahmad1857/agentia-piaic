import React from "react";

const Loader = ({ percentage }: { percentage: number }) => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div
          className="fill"
          style={{ width: `${percentage}%` }} // Dynamically updates width
        />
        <p className="loader-text">{percentage}%</p>
      </div>
    </div>
  );
};

export default Loader;
