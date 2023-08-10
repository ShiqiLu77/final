import React from 'react';
import styles from './deleteTaskButton.module.scss';
import deleteTaskButtonImage from './deteleTaskButton.png'

const DeleteTaskButton: React.FC = () => {
  return (
    <button className={styles['delete-task-button']}>
      <img src={deleteTaskButtonImage.src} alt="Delete Task" className={styles.image} />
      <span className={styles.text}>Delete Task</span>
    </button>
  );
};

export default DeleteTaskButton;
