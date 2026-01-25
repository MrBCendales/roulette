import { useState } from "react";

const TextInput = ({ onAddOption }) => {
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
        type="nameOption"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAddOption()}
        placeholder="Enter an option."
      />
      <button onClick={handleAddOption}>Add Option</button>
    </div>
  );
};

export default TextInput;
