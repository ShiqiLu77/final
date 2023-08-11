import React, { useState, useEffect } from 'react';
import styles from './goalDetail.module.scss';
import Goal from '@/models/goal';
import Image from 'next/image';

import goalIcon from './goalicon.png'
import HistogramSmall from '../histogram/histogramSmall';

interface Props {
  isOpen: boolean;
  goal: Goal | null;
  onClose: () => void;
}

export default function GoalDetail(props: Props) {
  const fakedata = [
    { day: 'Mon', hours: 4 },
    { day: 'Tue', hours: 5 },
    { day: 'Wed', hours: 3 },
    { day: 'Thu', hours: 6 },
    { day: 'Fri', hours: 2 },
    { day: 'Sat', hours: 4 },
    { day: 'Sun', hours: 3 },
    { day: 'Sun', hours: 3 },
    { day: 'Sun', hours: 3 },
    { day: 'Sun', hours: 3 },
  ];

  const [title, setTitle] = React.useState("");
  const [goalIcon, setGoalIcon] = React.useState("");
  const [totalHours, setTotalHours] = React.useState("");
  const [expectedCompletionDate, seteEpectedCompletionDate] = React.useState<string | null>(null);

  React.useEffect(() => {
    initializeModal();
  }, [props.goal]);

  const goalIcons = Array.from({ length: 12 }, (_, i) => require(`./goalicons/${i + 1}.png`));
  
  const initializeModal = () => {
    if (props.goal) {
      const date = new Date(props.goal.expectedCompletionDate);
      const localDateTime = new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000);
      seteEpectedCompletionDate(localDateTime.toISOString().slice(0, 16));
      setTitle(props.goal.title);
      setTotalHours(props.goal.totalHours.toString());
      const goalIcon = goalIcons[props.goal.logo - 1];

      setGoalIcon(goalIcon);
    }else{
      const goalIcon = goalIcons[1];

      setGoalIcon(goalIcon);
    }
  };
  
  
  

  return (
    <div className={styles['task-detail-page']}>
      <div className={styles.container}>
        <div className={styles['top-div']}>

          <div className={styles.left}>
            <Image src={goalIcon} alt="" width={200} height={180} />
          </div>

          <div className={styles.right}>
            <div className={styles.textContainer}>
              <div className={styles.title}>{title}</div>
              <div className={styles.subtitle}>Target Time: {totalHours} hours </div>
            </div>

            <button className={styles.button}>
              <div className={styles.square}>
                <div className={styles.plus}>+</div>
              </div>
              <span className={styles.buttonText}>Add Invested Time</span>
            </button>
            
          </div>
        </div>

        <div className={styles['time-day-record-div']}>
            <div className = {styles.overallContent}>
                <h3>5.5h</h3>
                <p>Total Time</p>
            </div>
            <div className = {styles.overallContent}>
                <h3>2d</h3>
                <p>Steak</p>
            </div>
            <div className = {styles.overallContent}>
                <h3>3</h3>
                <p>Records</p>
            </div>
        </div>

        <div className={styles['chart-div']}>
          <HistogramSmall data={fakedata}/> 

        </div>

      </div>
    </div>
  );
};
