import React from 'react';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <h2>Please leave feedback </h2>
      <div>
        <button className="btn" type="button" onClick={onLeaveFeedback}>
          Good
        </button>
        <button className="btn" type="button" onClick={onLeaveFeedback}>
          Normal
        </button>
        <button className="btn" type="button" onClick={onLeaveFeedback}>
          Bad
        </button>
      </div>
    </div>
  );
};
