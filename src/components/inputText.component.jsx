import { useState } from "react";

import { ReactComponent as AddIcon } from "../images/add-button.svg";

const TextInput = ({ onAddOption, disabled }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddOption = () => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue !== "") {
      onAddOption(trimmedValue);
      setInputValue("");
    }
  };
  console.log();
  return (
    <div>
      <input
        type="nameOption"
        disabled={disabled}
        value={inputValue}
        maxLength={10}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAddOption()}
        placeholder="Enter an option."
      />
      <button onClick={handleAddOption}>
        <AddIcon style={{ width: "28px", height: "28px" }} />
      </button>
    </div>
  );
};

export default TextInput;
