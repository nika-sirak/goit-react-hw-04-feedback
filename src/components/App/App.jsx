import React, { Component } from 'react'
import Section from 'components/Section/Section'
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions'
import Statistics from 'components/Statistics/Statistics'
import Notification from 'components/Notification/Notification'
import s from './App.module.css'



class App extends Component {
  state = {  
    good: 0,
    neutral: 0,
    bad: 0,
  }
  onHandleFeedback = (key) => {
    this.setState(prevState => ({  [key]: prevState[key] + 1 }))
  }
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, i) => total + i , 0);
  }
  countPositiveFeedbackPercentage = () => {
    let total = this.countTotalFeedback();
    return Number.parseInt((this.state.good / total) * 100);
  }
  render() {  
    const { good, neutral, bad } = this.state;
    return (
      <div className={s.wrapper}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.state} onLeaveFeedback={this.onHandleFeedback} />
          {good === 0 && bad === 0 && neutral === 0 ?
            <Notification message="There is no feedback" /> :
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}></Statistics>}
          </Section>
      </div>
    );
  }
};


export default App;