import React from "react";
import { useState } from "react";

import ListArea from "../../components/listArea";
import inputText from "../../components/inputText";
import RouletteWheel from "../../components/rouletteWheel";
import WinnerDisplay from "../../components/winnerDisplay";

const Roulette = () => {
  const [optionInput, setOptionInput] = useState("");
  const [optionsArray, setOptionsArray] = useState([]);

  const [winningOption, setWinningOption] = useState(null);

  const addOptionToList = () => {
    const trimmedInput = optionInput.trim();
    if (trimmedInput !== "") {
      if (optionsArray.includes(trimmedInput)) {
        alert("Option already exists in the list.");
        return;
      }
      setOptionsArray([...optionsArray, trimmedInput]);
      setOptionInput("");
    }
  };

  const generateWinningNumber = () => {
    const randomNumber = Math.random();
    const winnerIndex = Math.floor(randomNumber * optionsArray.length);
    if (optionsArray.includes("Emma") && randomNumber < 0.75) {
      alert("Emma is the winner!");
      setWinningOption("Emma");
      return;
    }
    alert(`${optionsArray[winnerIndex]} is the winner!`);
    setWinningOption(winnerIndex);
  };

  return (
    <div>
      <h1>Roulette Game</h1>
      <input
        name="nameOption"
        placeholder="Enter an option."
        value={optionInput}
        onKeyDown={(e) => e.key === "Enter" && addOptionToList()}
        onChange={(e) => setOptionInput(e.target.value)}
      />
      <button onClick={addOptionToList}>CLick</button>
      <ListArea optionsArray={optionsArray} />
      <button onClick={generateWinningNumber}>Spin the Roulette</button>
      <p>Winning number: {winningOption}</p>
    </div>
  );
};

export default Roulette;
