import React from 'react';
import TopDiv from './TopDiv';
import TimeDayRecordDiv from './TimeDayRecordDiv';
import ChartDiv from './ChartDiv';
import EditTaskButton from './EditTaskButton';
import DeleteTaskButton from './DeleteTaskButton';
import styles from './taskDetailPage.module.scss';

const TaskDetailPage: React.FC = () => {
  const imageSrc = 'path/to/your/image.png';
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
      </div>
    </div>
  );
};
export default TaskDetailPage;
