import React, { useState, useEffect } from 'react';
import styles from './editGoalModal.module.scss';

import Goal from '@/models/goal';

import goalIcon1 from './goalIcons/1.png';
import goalIcon2 from './goalIcons/2.png';
import goalIcon3 from './goalIcons/3.png';
import goalIcon4 from './goalIcons/4.png';
import goalIcon5 from './goalIcons/5.png';
import goalIcon6 from './goalIcons/6.png';
import goalIcon7 from './goalIcons/7.png';
import goalIcon8 from './goalIcons/8.png';
import goalIcon9 from './goalIcons/9.png';
import goalIcon10 from './goalIcons/10.png';
import goalIcon11 from './goalIcons/11.png';
import goalIcon12 from './goalIcons/12.png';

import { updateGoal, deleteGoal } from '../../../../services/goal-service';

interface Props {
  isOpen: boolean;
  goal: Goal | null;
  onClose: () => void;
  onSave: () => void;
  onDelete: () => void;
}

const images = [goalIcon1, goalIcon2, goalIcon3, goalIcon4, goalIcon5, goalIcon6
  ,goalIcon7, goalIcon8, goalIcon9,goalIcon10, goalIcon11, goalIcon12]

export default function EditGoalModal(props: Props) {

  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
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
    <div className={styles['modal']}>
      <div className={styles['modal-content']}>
        <div className={styles['goal-title-div']}>
          <span>Goal Title : </span>
          <input type="text" id="edit-title" title="edit-title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className={styles['goal-time-div']}>
          <span>Target Total Time: </span>
          <input type="number" id="edit-description" title="edit-description"
            value={totalHours}
            onChange={(e) => setTotalHours(e.target.value)}
          />
          <span> Hours</span>
        </div>
        <div className={styles['goal-ddl-div']}>
          <span>Expected completion date: </span>
          {/* <input type="date" /> Date picker */}
          {/* <input type="date" id="edit-time" title="edit-time" 
          value = { expectedCompletionDate?.toString().slice(0, 16) } 
          onChange = { (e) =>  seteEpectedCompletionDate(e.target.value) } 
        /> */}
                <input type="datetime-local" id="edit-time" title="edit-time" 
          value = { expectedCompletionDate?.toString().slice(0, 16) } 
          onChange = { (e) =>  seteEpectedCompletionDate(e.target.value) } 
        />
        </div>

        <div className={styles['select-logo']}>Please select a logo</div>
        <div className={styles['image-selection']}>
          {images.map((image, index) => (
            <div className={styles['image-container']} key={index} onClick={() => setSelectedImage(image.src)}>
              <img
                src={image.src}
                alt={`Image ${index}`}
                className={selectedImage === image.src ? `${styles.image} ${styles.selected}` : styles.image}
              />
            </div>
          ))}
        </div>

        <div className={styles['button-bar']}>
          <button className={styles['cancel-button']} onClick={handleClose}>Cancel</button>
          <button className={styles['submit-button']}>Done</button>
        </div>
      </div>
    </div>
  );
};
