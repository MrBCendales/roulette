import React, { Fragment } from "react";
import { useState } from "react";
import { Wheel } from "react-custom-roulette";

import OptionsList from "../../components/optionsList.component";
import TextInput from "../../components/inputText.component";
import WinnerDisplay from "../../components/winnerDisplay.component";

import "./roulette.styles.scss";
// import gradientStarter from "../../images/gradient_starter.png";
// import gradientBronze from "../../images/gradient_bronze.png";
// import gradientGold from "../../images/gradient_gold.png";
// import gradientBright from "../../images/gradient_bright.png";

const generateWinningNumber = (optionsObject) => {
  const randomNumber = Math.random();
  const optArray = optionsObject.map((option) => option.option);
  let winnerIndex = Math.floor(randomNumber * optArray.length);
  console.log(winnerIndex);
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
    const starterColor = ["#8B4513"];
    const backgroundColors = ["#CD7F32", "#CFB53B", "#FFD700"];

    if (optionsArray.some((option) => option.option === optionInput)) {
      alert("Option already exists in the list.");
      return;
    }

    if (optionsArray.length === 0) {
      setOptionsArray([
        ...optionsArray,
        { option: optionInput, style: { backgroundColor: starterColor[0] } },
      ]);
      return;
    } else {
      const colorIndex = optionsArray.length % backgroundColors.length;
      setOptionsArray([
        ...optionsArray,
        {
          option: optionInput,
          style: { backgroundColor: backgroundColors[colorIndex] },
        },
      ]);
    }
  };

  const handleRemoveOptionFromList = (index) => {
    const newOptionsArray = optionsArray.filter((_, i) => i !== index);
    setOptionsArray(newOptionsArray);
  };

  const handleEditOptionInList = (index, newValue) => {
    const newOptionsArray = [...optionsArray];
    newOptionsArray[index] = { ...newOptionsArray[index], option: newValue };
    setOptionsArray(newOptionsArray);
  };

  const handleSpin = () => {
    if (optionsArray.length === 0) {
      alert("Add some options first!");
      return;
    }
    setShowWinner(false);
    setIsSpinning(true);
    const winningNumber = generateWinningNumber(optionsArray);
    setWinningOption(winningNumber);
  };

  return (
    <div className="roulette-container">
      <div
        className="left-panel"
        style={{ pointerEvents: isSpinning ? "none" : "auto" }}
      >
        <OptionsList
          optionsArray={optionsArray}
          onRemove={handleRemoveOptionFromList}
          onEdit={handleEditOptionInList}
        />
        <TextInput onAddOption={handleAddOptionToList} />
      </div>
      <div className="right-panel" onClick={!isSpinning ? handleSpin : null}>
        {/* Only show wheel if there are options */}
        {optionsArray.length > 0 && (
          <Wheel
            mustStartSpinning={isSpinning}
            prizeNumber={winningOption}
            data={optionsArray}
            textColors={["#ffffff"]}
            innerBorderColor={"white"}
            outerBorderColor={"gray"}
            innerBorderWidth={50}
            onStopSpinning={() => {
              setIsSpinning(false);
              setShowWinner(true);
            }}
          />
        )}
        {!isSpinning && showWinner && (
          <Fragment>
            <div className="overlay" onClick={() => setShowWinner(false)} />
            <WinnerDisplay
              winner={
                winningOption !== null && optionsArray[winningOption]
                  ? optionsArray[winningOption].option
                  : null
              }
            />
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Roulette;
