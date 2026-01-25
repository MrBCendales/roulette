import { useState } from "react";

const InputText = ({ onAddOption }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddOption = () => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue !== "") {
      onAddOption(trimmedValue);
      setInputValue("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter an option."
      />
      <button onClick={handleAddOption}>Add Option</button>
    </div>
  );
};

export default InputText;
