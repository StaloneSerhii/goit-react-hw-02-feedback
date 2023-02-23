import React, { Component } from 'react';

import { Statistics } from './feedback/statistic/statistics';
import { FeedbackOptions } from './feedback/btn/buttonFeedback';

export class App extends Component {
  state = {
    good: 0,
    normal: 0,
    bad: 0,
  };

  handleIncrement = e => {
    const handleIncr = e.target.textContent.toLowerCase();
    this.setState(prevStat => ({ [handleIncr]: prevStat[handleIncr] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, normal, bad } = this.state;
    const total = good + normal + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Statistics
          good={this.state.good}
          normal={this.state.normal}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
        <FeedbackOptions onLeaveFeedback={this.handleIncrement} />
      </div>
    );
  }
}
