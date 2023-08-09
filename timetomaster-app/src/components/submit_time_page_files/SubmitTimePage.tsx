
import React from 'react';
import './submitTime.module.scss';
import TopDiv from './TopDiv';
import DateDisplay from './DateDisplay';
import DurationSelector from './DurationSelector';
import ConfirmButton from './ConfirmButton';
import TopBar from './TopBar'
import styles from './submitTime.module.scss';

export default function SubmitTimePage() {
  return (
    <div className={styles['page-container']}>
      <TopBar />
      <div className={styles.container}>
        <TopDiv />
        <DateDisplay />
        <DurationSelector />
        <ConfirmButton />
      </div>
    </div>
  );
}
