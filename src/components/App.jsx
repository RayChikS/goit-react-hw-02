import { useState, useEffect } from 'react';
import { Description } from './Description';
import { Feedback } from './Feedback';
import { Options } from './Options';
import { Notification } from './Notification';

//инициализируем состояние с помощью localStorage
export const App = () => {
  //получаем данные из localStorage
  const storedData = JSON.parse(localStorage.getItem('feedbackData')) || {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [data, setData] = useState(storedData);

  //сохраняем состояние в localSorage при изменении
  useEffect(() => {
    localStorage.setItem('feedbackData', JSON.stringify(data));
  }, [data]);

  //обрабатываем клик на кнопки обновля предыдущее состояние
  const handleButtonClick = option => {
    setData(prevData => ({
      ...prevData,
      [option]: prevData[option] + 1,
    }));
  };

  //кнопка reset
  const handleResetClick = () => {
    setData({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  //данные для total и positive
  const totalFeedback = data.good + data.neutral + data.bad;
  const percent = Math.round(
    ((data.good + data.neutral) / totalFeedback) * 100
  );

  return (
    <>
      <Description />
      <Options
        onButtonClick={handleButtonClick}
        onResetClick={handleResetClick}
      />
      {/* если в total ничего нет то загружаем сообщение */}
      {totalFeedback > 0 ? (
        <Feedback data={data} total={totalFeedback} positive={percent} />
      ) : (
        <Notification />
      )}
    </>
  );
};
