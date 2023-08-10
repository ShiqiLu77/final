import React, { useState, useEffect } from 'react';
import styles from './editGoalModal.module.scss';

import Goal from '@/models/goal';

import editTaskButtonImage from './editTaskButton.png';
import deleteTaskButtonImage from './deteleTaskButton.png'
import goalIcon from './goalicon.png'

import { updateGoal, deleteGoal } from '../../../../services/goal-service';

interface Props {
  isOpen: boolean;
  goal: Goal | null;
  onClose: () => void;
  onSave: () => void;
  onDelete: () => void;
}
export default function EditGoalModal(props: Props) {
  console.log("Props in EditGoalModal:", props);

  const [title, setTitle] = React.useState("");
  const [totalHours, setTotalHours] = React.useState("");
  const [expectedCompletionDate, seteEpectedCompletionDate] = React.useState<string | null>(null);
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const [formError, setFormError] = React.useState<string | null>(null);

  React.useEffect(() => {
    initializeModal();
  }, [props.isOpen]);

  const initializeModal = () => {
    if (props.goal) {
      const date = new Date(props.goal.expectedCompletionDate);
      const localDateTime = new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000);
      seteEpectedCompletionDate(localDateTime.toISOString().slice(0, 16));
      setTitle(props.goal.title);
      setTotalHours(props.goal.totalHours.toString());
    }
  };

  // const handleSave = async () => {
  //   if(title && dueDate && props.reminder) {
  //     const updatedReminder :PartialReminder = {
  //       title : title,
  //       description : description,
  //       dueDate: dueDate,
  //     };
  //     try{
  //       await updateReminder(props.reminder._id, updatedReminder);
  //       props.onSave();
  //     } catch (error) {
  //       setSubmitError('Updating reminder failed. Please try again.');
  //     } 
  //   }else {
  //     setFormError('Please fill in all required fields: title and due date.');
  //   }
  // }


  const handleClose = () => {
    props.onClose();
    resetForm();
  }

  const handleDelete = async () => {
    if (!props.goal) { return; }
    await deleteGoal(props.goal._id);
    props.onDelete();
    resetForm();
  }

  const resetForm = () => {
    setTitle('');
    setTotalHours('');
    seteEpectedCompletionDate(null);
    setFormError(null);
    setSubmitError(null);
  }

  return (
    props.isOpen &&
    <div className={styles['task-detail-page']}>
      <div className={styles.container}>
        <div className={styles['top-div']}>
          <div className={styles.left}>
            <img src={goalIcon.src} alt="Left Image" className={styles.image} />
          </div>

          <div className={styles.right}>
            <div className={styles.textContainer}>
              <input type="text" id="edit-title" title="edit-title" value={title} onChange={(e) => setTitle(e.target.value)} />
              <label htmlFor="edit-description">Target Time:</label>
              <input type="text" id="edit-description" title="edit-description"
                value={totalHours}
                onChange={(e) => setTotalHours(e.target.value)}
              />
              <div className={styles.subtitle}>target time: '10,000 hours' </div>
            </div>

            <button className={styles.button}>
              <div className={styles.square}>
                <div className={styles.plus}>+</div>
              </div>
              <span className={styles.buttonText}>add accumulate time</span>
            </button>
          </div>
        </div>

        <div className={styles['time-day-record-div']}>

        </div>

        <div className={styles['chart-div']}>

        </div>


        <div className={styles.buttonWrapper}>
          {/* Add wrapper for buttons */}
          <button className={styles['edit-task-button']}>
            <img src={editTaskButtonImage.src} alt="Edit Task" className={styles.image} />
            <span className={styles.text}>Edit</span>
          </button>

          <button className={styles['delete-task-button']}>
            <img src={deleteTaskButtonImage.src} alt="Delete Task" className={styles.image} />
            <span className={styles.text}>Delete</span>
          </button>

          <button onClick={handleClose}>Close</button>

        </div>

      </div>
    </div>
  );
};
