const RouletteWheel = ({ options, onSpin, isSpinning }) => {
  return (
    <div className="roulette-wheel">
      {/* This is where your spinning wheel visual will go */}
      <div className="wheel-container">{/* Wheel visualization here */}</div>
      <button onClick={onSpin} disabled={options.length === 0 || isSpinning}>
        {isSpinning ? "Spinning..." : "Spin the Roulette"}
      </button>
    </div>
  );
};

export default RouletteWheel;
