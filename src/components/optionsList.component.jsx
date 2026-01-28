import "./styles/optionsList.styles.scss";

const OptionsList = ({ optionsArray, onRemove }) => {
  return (
    <div className="options-list">
      {optionsArray.map((option, index) => (
        <div key={index} className="option-item">
          <span>{option.option}</span>
          {onRemove && <button onClick={() => onRemove(index)}>X</button>}
        </div>
      ))}
    </div>
  );
};

export default OptionsList;
