import "../styles/winnerDisplay.styles.scss";

import { ReactComponent as CloseIcon } from "../images/icons/close-icon.svg";
import HappyPepe from "../images/icons/Happy_pepe.png";

const WinnerDisplay = ({ winner, winnerIndex, onRemove, onClose }) => {
  if (!winner) return null;
  return (
    <div className="winner-display">
      <button className="close-btn" onClick={onClose}>
        <CloseIcon style={{ width: "24px", height: "24px" }} />
      </button>
      <div className="winner-text-container">
        <h1 className="winner-text">{winner}</h1>
        <img src={HappyPepe} alt="pepe" style={{ width: "60px" }} />
      </div>

      <button className="remove-btn" onClick={() => onRemove(winnerIndex)}>
        Remove player and continue
      </button>
    </div>
  );
};

export default WinnerDisplay;
