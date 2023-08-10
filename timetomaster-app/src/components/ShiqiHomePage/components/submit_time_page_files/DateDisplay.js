
import React from 'react';
import styles from './submitTime.module.scss';

const DateDisplay = () => {
  const currentDate = new Date().toLocaleDateString();
  return (
    <div className={styles['date-display']}>
      {currentDate}
    </div>
  );
};

export default DateDisplay;
