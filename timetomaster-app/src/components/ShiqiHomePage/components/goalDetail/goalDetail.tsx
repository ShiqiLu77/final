import React from 'react';
import TopDiv from './TopDiv';
import TimeDayRecordDiv from './TimeDayRecordDiv';
import ChartDiv from './ChartDiv';
import EditTaskButton from './EditTaskButton';
import DeleteTaskButton from './DeleteTaskButton';
import styles from './goalDetail.module.scss';

interface GoalDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GoalDetailModal: React.FC<GoalDetailModalProps> = ({ isOpen, onClose }) => {
  const imageSrc = 'path/to/your/image.png';
  if (!isOpen) {
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
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
export default GoalDetailModal;
