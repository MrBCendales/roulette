const WinnerDisplay = ({ winner }) => {
  if (!winner) return null;

  return (
    <div className="winner-display">
      <h2>🎉 Winner: {winner}</h2>
    </div>
  );
};

export default WinnerDisplay;
