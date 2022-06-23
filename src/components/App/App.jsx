import React, { useState } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import s from './App.module.css';

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const options = Object.keys(feedback);
  const stats = Object.entries(feedback);

  const onHandleFeedback = key => {
    setFeedback(prevState => ({
      ...prevState,
      [key]: prevState[key] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((total, i) => total + i, 0);
  };

  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    return Number.parseInt((feedback.good / total) * 100);
  };

  return (
    <div className={s.wrapper}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onHandleFeedback} />
        {total === 0 && <Notification message="There is no feedback" />}
        {total !== 0 && (
          <Statistics
            stats={stats}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}

export default App;
