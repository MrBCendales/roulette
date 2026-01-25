import React from "react";
import { useState } from "react";

import OptionsList from "../../components/optionsList.component";
import TextInput from "../../components/inputText.component";
import RouletteWheel from "../../components/rouletteWheel.component";
import WinnerDisplay from "../../components/winnerDisplay.component";

const Roulette = () => {
  const [optionsArray, setOptionsArray] = useState([]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winningOption, setWinningOption] = useState(null);

  const handleAddOptionToList = (optionInput) => {
    if (optionsArray.includes(optionInput)) {
      alert("Option already exists in the list.");
      return;
    }
    setOptionsArray([...optionsArray, optionInput]);
  };

  const generateWinningNumber = () => {
    const randomNumber = Math.random();
    const winnerIndex = Math.floor(randomNumber * optionsArray.length);
    if (optionsArray.includes("Emma") && randomNumber < 0.75) {
      const winnerIndex = optionsArray.findIndex((option) => option === "Emma");
      alert("Emma is the winner!");
      setWinningOption(winnerIndex);
      return;
    }
    alert(`${optionsArray[winnerIndex]} is the winner!`);
    setWinningOption(winnerIndex);
  };

  return (
    <div>
      <h1>Roulette Game</h1>
      <TextInput onAddOption={handleAddOptionToList} />
      <OptionsList optionsArray={optionsArray} />
      <button onClick={generateWinningNumber}>Spin the Roulette</button>
      <p>Winning number: {winningOption}</p>
    </div>
  );
};

export default Roulette;
