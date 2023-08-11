import React, { useState } from 'react';
import styles from './createRecordModal.module.scss';
import DurationSelector from './DurationSelector';
import TimeAccumulator from './TimeAccumulator';
import GoalCard from '../goalCard/goalCard3';
import Goal from '@/models/goal';
import Record from '@/models/record';

interface Props {
  goal: Goal | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (record: Record) => void;
}

export default function CreateRecordModal(props: Props) {
  const [selectedTime, setSelectedTime] = useState(0);
  const [goalId, setGoalId] = React.useState("");

  const handleTimeSelected = (timeInMinutes: number) => {
    setSelectedTime((prevTime) => prevTime + timeInMinutes);
  };

  const handleReset = () => {
    setSelectedTime(0);
  };


  const handleSubmit = () => {
  }

  return (
    props.isOpen &&
    <div className={styles['modal']}>
      <div className={styles['page-container']}>
        <div className={styles['top-bar']}>
          Record Your Invested Time
        </div>

        <div className={styles.container}>
          <div className={styles['top-div']}>
            <GoalCard key={goalId}
              goal={props.goal} />
            <TimeAccumulator selectedTime={selectedTime} onReset={handleReset} />
          </div>

          <div className={styles['date-display']}>
            <p>Records</p>
            <div className={styles['current-date']}>
              {new Date().toLocaleDateString()}
            </div>
          </div>

          <DurationSelector onTimeSelected={handleTimeSelected} />
          <div className={styles['button-bar']}>
            <button className={styles['cancel-button']} onClick={props.onClose}>Cancel</button>
            <button className={styles['submit-button']} onClick={handleSubmit}>Submit</button>
          </div>
        </div>
        {/* <ClockBar imageSrc="path/to/your/image.png" /> */}
      </div>
    </div>
  );
}
