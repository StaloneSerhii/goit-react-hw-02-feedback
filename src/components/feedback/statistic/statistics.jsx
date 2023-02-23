import React from 'react';

export const Statistics = ({
  good,
  normal,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <h2>Stastics</h2>
      <ul>
        <li>
          <h3>Good: {good}</h3>
        </li>
        <li>
          <h3>Normal: {normal}</h3>
        </li>
        <li>
          <h3>Bad: {bad}</h3>
        </li>
        <li>
          <h3>Total: {total}</h3>
        </li>
        <li>
          <h3>Positive feedback: {positivePercentage}%</h3>
        </li>
      </ul>
    </div>
  );
};
