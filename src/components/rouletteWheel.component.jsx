import React from "react";
import "./rouletteWheel.styles.scss";

const RouletteWheel = ({ options, onSpin, isSpinning }) => {
  const colors = [
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#FFA07A",
    "#98D8C8",
    "#F7DC6F",
    "#BB8FCE",
    "#85C1E2",
  ];

  const segmentAngle = 360 / options.length;

  return (
    <div className="roulette-container">
      <div className="wheel">
        {options.map((option, index) => {
          const rotation = segmentAngle * index;
          const color = colors[index % colors.length];

          return (
            <div
              key={index}
              className="wheel-segment"
              style={{
                transform: `rotate(${rotation}deg)`,
                backgroundColor: color,
              }}
            >
              <span className="segment-text">{option}</span>
            </div>
          );
        })}
      </div>

      <button onClick={onSpin} disabled={isSpinning}>
        {isSpinning ? "Spinning..." : "Spin!"}
      </button>
    </div>
  );
};

export default RouletteWheel;
