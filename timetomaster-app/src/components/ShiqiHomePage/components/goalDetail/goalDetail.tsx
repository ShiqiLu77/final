import styles from './goalDetail.module.scss';
import React from 'react';

import TopDiv from './TopDiv';
import TimeDayRecordDiv from './TimeDayRecordDiv';
import ChartDiv from './ChartDiv';
import EditTaskButton from './EditTaskButton';
import DeleteTaskButton from './DeleteTaskButton';

import Goal from '@/models/goal';

import { updateGoal, deleteGoal } from '../../../../services/goal-service';

interface Props {
  isOpen: boolean;
  goal: Goal | null;
  onClose: () => void;
  // onSave: () => void;
  // onDelete: () => void;
}

const GoalDetailModal: React.FC<Props> = (props: Props) => {
  const imageSrc = 'path/to/your/image.png';

  if (!props.isOpen || !props.goal) {
    return null;
  } 

  return (
    <div className={styles['task-detail-page']}>
      <div className={styles.container}>
        <TopDiv imageSrc={imageSrc} />
        <TimeDayRecordDiv />
        <ChartDiv />
        <div className={styles.buttonWrapper}> {/* Add wrapper for buttons */}
          <EditTaskButton />
          <DeleteTaskButton />
        </div>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
};
export default GoalDetailModal;
