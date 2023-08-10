import React from 'react';
import styles from './editTaskButton.module.scss';
import editTaskButtonImage from './editTaskButton.png';


const EditTaskButton: React.FC = () => {
  return (
    <button className={styles['edit-task-button']}>
      <img src={editTaskButtonImage.src} alt="Edit Task" className={styles.image} />
      <span className={styles.text}>Edit Task</span>
    </button>
  );
};

export default EditTaskButton;
