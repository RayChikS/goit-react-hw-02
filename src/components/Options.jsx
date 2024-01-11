import css from './Options.module.css';

//получаем пропсы от App и подставляем для работы функций
export const Options = ({ onButtonClick, onResetClick }) => {
  return (
    <div className="options">
      <ul className={css.optionsList}>
        <li className="optionsItem">
          <button
            className="optionsButton"
            onClick={() => onButtonClick('good')}
          >
            Good
          </button>
        </li>
        <li className="optionsItem">
          <button
            className="optionsButton"
            onClick={() => onButtonClick('neutral')}
          >
            Neutral
          </button>
        </li>
        <li className="optionsItem">
          <button
            className="optionsButton"
            onClick={() => onButtonClick('bad')}
          >
            Bad
          </button>
        </li>
        <li className="optionsItem">
          <button className="optionsButton" onClick={onResetClick}>
            Reset
          </button>
        </li>
      </ul>
    </div>
  );
};
