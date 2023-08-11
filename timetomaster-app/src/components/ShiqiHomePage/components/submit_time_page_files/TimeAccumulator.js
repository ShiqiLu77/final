import React, { useState, useEffect } from 'react';
import styles from './createRecordModal.module.scss';


const TimeAccumulator = ({ selectedTime, onReset }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (selectedTime) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [selectedTime]);

  const handleReset = () => {
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
        {formatTime(selectedTime)}
      </div>
      <button className={styles['reset-button']} onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default TimeAccumulator;
