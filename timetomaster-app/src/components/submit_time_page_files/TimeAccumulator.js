import React, { useState, useEffect } from 'react';
import styles from './submitTime.module.scss';


const TimeAccumulator = ({ selectedTime, onReset }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [accumulatedTime, setAccumulatedTime] = useState(0);

  useEffect(() => {
    if (selectedTime) {
      setIsVisible(true);
      setAccumulatedTime((prevTime) => prevTime + selectedTime);
    }
  }, [selectedTime]);

  const handleReset = () => {
    setAccumulatedTime(0);
    setIsVisible(false);
    if (onReset) onReset(); // Ensure onReset is provided
  };

  const formatTime = (timeInMinutes) => {
    const hours = Math.floor(timeInMinutes / 60);
    const minutes = timeInMinutes % 60;
    return `${hours > 0 ? hours + 'h' : ''}${minutes > 0 ? minutes + 'min' : ''}`;
  };

  return (
    <div className={`${styles['time-accumulator']} ${isVisible ? styles.visible : ''}`}>
      <div className={styles['time-display']}>
        {formatTime(accumulatedTime)}
      </div>
      <button className={styles['reset-button']} onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default TimeAccumulator;
