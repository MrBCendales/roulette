import React from "react";
import { useState } from "react";
import { Wheel } from "react-custom-roulette";

import OptionsList from "../../components/optionsList.component";
import TextInput from "../../components/inputText.component";
import WinnerDisplay from "../../components/winnerDisplay.component";

import "./roulette.styles.scss";

const generateWinningNumber = (optionsObject) => {
  const randomNumber = Math.random();
  const optArray = optionsObject.map((option) => option.option);
  let winnerIndex = Math.floor(randomNumber * optArray.length);
  if (optArray.includes("Emma") && randomNumber < 0.75) {
    winnerIndex = optArray.findIndex((option) => option === "Emma");
  }
  return winnerIndex;
};

const Roulette = () => {
  const [optionsArray, setOptionsArray] = useState([]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winningOption, setWinningOption] = useState(null);
  const [showWinner, setShowWinner] = useState(false);

  const handleAddOptionToList = (optionInput) => {
    if (optionsArray.some((option) => option.option === optionInput)) {
      alert("Option already exists in the list.");
      return;
    }
    setOptionsArray([...optionsArray, { option: optionInput }]);
  };

  const handleRemoveOptionFromList = (index) => {
    const newOptionsArray = optionsArray.filter((_, i) => i !== index);
    setOptionsArray(newOptionsArray);
  };

  const handleSpin = () => {
    if (optionsArray.length === 0) {
      alert("Add some options first!");
      return;
    }
    setIsSpinning(true);
    const winningNumber = generateWinningNumber(optionsArray);
    setWinningOption(winningNumber);
  };

  return (
    <div>
      <h1>Roulette Game</h1>
      <div className="roulette-container">
        <div className="left-panel">
          <TextInput onAddOption={handleAddOptionToList} />
          <OptionsList
            optionsArray={optionsArray}
            onRemove={handleRemoveOptionFromList}
          />
        </div>
        <div className="right-panel">
          {/* Only show wheel if there are options */}
          {optionsArray.length > 0 && (
            <Wheel
              mustStartSpinning={isSpinning}
              prizeNumber={winningOption}
              data={optionsArray}
              backgroundColors={["#3e3e3e", "#df3428"]}
              textColors={["#ffffff"]}
              innerBorderWidth={2}
              onStopSpinning={() => {
                setIsSpinning(false);
                setShowWinner(true);
              }}
            />
          )}

          <button onClick={handleSpin}>SPIN</button>
          {!isSpinning && showWinner && (
            <WinnerDisplay
              winner={
                winningOption !== null && optionsArray[winningOption]
                  ? optionsArray[winningOption].option
                  : null
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Roulette;
