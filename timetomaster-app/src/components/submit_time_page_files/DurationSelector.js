import React, { useState } from 'react';
import styles from './submitTime.module.scss';

const DurationSelector = () => {
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [customDuration, setCustomDuration] = useState('');
  const [showInput, setShowInput] = useState(false);

  const durations = ['5min', '10min', '25min', '30min', '45min', '60min', '1h 30min', '2h'];

  return (
    <div className={styles['duration-selector']}>
      {durations.map((duration, index) => (
        <button
          key={index}
          className={selectedDuration === index ? styles.selected : ''}
          onClick={() => setSelectedDuration(index)}
        >
          {duration}
        </button>
      ))}
      <button
        className={styles.custom}
        onClick={() => setShowInput(true)}
      >
        Others
      </button>
      {showInput && (
        <input
          type="text"
          value={customDuration}
          onChange={(e) => setCustomDuration(e.target.value)}
          placeholder="Enter a duration"
          className={styles['custom-input']}
        />
      )}
    </div>
  );
};

export default DurationSelector;
