import css from './Feedback.module.css';

//передаем пропсы от App
export const Feedback = ({ data, total, positive }) => {
  return (
    <div className="feedback">
      <ul className={css.feedbackList}>
        <li className="feedbackItem">
          <p className="feedbackText">Good: {data.good}</p>
        </li>
        <li className="feedbackItem">
          <p className="feedbackText">Neutral: {data.neutral}</p>
        </li>
        <li className="feedbackItem">
          <p className="feedbackText">Bad: {data.bad}</p>
        </li>
        <li className="feedbackItem">
          <p className="feedbackText">Total: {total}</p>
        </li>
        <li className="feedbackItem">
          <p className="feedbackText">Positive: {positive}%</p>
        </li>
      </ul>
    </div>
  );
};
