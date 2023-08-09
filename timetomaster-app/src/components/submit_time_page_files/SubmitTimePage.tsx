import React, { useState } from 'react';
import styles from './submitTime.module.scss';
import TopDiv from './TopDiv';
import DateDisplay from './DateDisplay';
import DurationSelector from './DurationSelector';
import ConfirmButton from './ConfirmButton';
import TopBar from './TopBar';
import TimeAccumulator from './TimeAccumulator';
import ClockBar from '../TomatoClock/ClockBar';

export default function SubmitTimePage() {
  const [selectedTime, setSelectedTime] = useState(0);

  const handleTimeSelected = (timeInMinutes: number) => {
    setSelectedTime((prevTime) => prevTime + timeInMinutes);
  };

  const handleReset = () => {
    setSelectedTime(0);
  };

  return (
    <div className={styles['page-container']}>
      <TopBar />
      <div className={styles.container}>
        <TopDiv />
        <TimeAccumulator selectedTime={selectedTime} onReset={handleReset} />
        <DateDisplay />
        <DurationSelector onTimeSelected={handleTimeSelected} />
        <ConfirmButton />
      </div>
      <ClockBar imageSrc="path/to/your/image.png" />
    </div>
  );
}
