import React from 'react';
import Countdown from 'react-countdown';

// Custom renderer for the countdown
const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // If countdown is complete
    return <p>The competition has started!</p>;
  } else {
    // Otherwise, show the countdown
    return (
        <>
      <div className='count-down-time'>
        <span>{days}: </span>
        <span>{hours}: </span>
        <span>{minutes}: </span>
        <span>{seconds}</span>
      </div>
      
      </>
    
    );
  }
};

const Count = () => {
  // Set the target date for 15 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 15); // 15 days in the future

  return (
    <div>
      <Countdown date={targetDate} renderer={countdownRenderer} />
    </div>
  );
};

export default Count;
