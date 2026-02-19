import "../styles/optionsList.styles.scss";
import { Fragment, useState } from "react";
import { ReactComponent as EditIcon } from "../images/icons/edit-icon.svg";
import { ReactComponent as DeleteIcon } from "../images/icons/trash-bin.svg";

const OptionsList = ({ optionsArray, onRemove, onEdit }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [tempEditValue, setTempEditValue] = useState("");

  // If no options, show empty state
  if (optionsArray.length === 0) {
    return (
      <div className="options-list empty">
        <p className="empty-message">Add some names to get started!</p>
      </div>
    );
  }

  return (
    <div className="options-list">
      {optionsArray.map((option, index) => (
        <div key={index} className="option-item">
          {editingIndex === index ? (
            <input
              type="text"
              value={tempEditValue}
              maxLength={10}
              onChange={(e) => {
                const newValue = e.target.value;
                if (newValue.length <= 10) {
                  setTempEditValue(newValue);
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onEdit(index, tempEditValue);
                  setEditingIndex(null);
                }
              }}
              autoFocus
            />
          ) : (
            <Fragment>
              <span>{option.option}</span>
              {onEdit && (
                <button
                  className="edit-btn"
                  onClick={() => {
                    setEditingIndex(index);
                    setTempEditValue(option.option);
                  }}
                >
                  <EditIcon style={{ width: "20px", height: "20px" }} />
                </button>
              )}
              {onRemove && (
                <button className="delete-btn" onClick={() => onRemove(index)}>
                  <DeleteIcon style={{ width: "20px", height: "20px" }} />
                </button>
              )}
            </Fragment>
          )}
        </div>
      ))}
    </div>
  );
};

export default OptionsList;
