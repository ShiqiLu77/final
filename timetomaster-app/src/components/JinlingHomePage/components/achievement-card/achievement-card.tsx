import React, { useState } from 'react';
//import Achievement from "../../models/achievement";
import Achievement from '@/models/achievement';

import styles from './achievement-card.module.scss';

//import Modal from 'react-modal'; // Import the modal library


interface Props {
  achievement: Achievement;

  color: string;
  isColored: boolean;
  shouldColorFirstFive: boolean; // 添加 shouldColorFirstFive 属性
  index: number; // 添加索引属性
  goalId: string;
  handleGoalCompletion: (completedGoalId: string) => void; // 注意这里的类型定义

}

export default function AchievementComponent(props: Props) {
  const { achievement, goalId, index, color, isColored, shouldColorFirstFive } = props;

  //const isGray = shouldColorFirstFive && index >= 5;



  const timestamp = new Date(achievement.achievementDate);
  const timeString = timestamp.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' });
  const achievementDate = timestamp.toLocaleDateString() + ' ' + timeString;

  const [isCompleted, setIsCompleted] = useState(false);


  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [modalMessage, setModalMessage] = useState(''); // State to store modal message

  // const handleCardClick = () => {
  //   if (isColored) {
  //     setModalMessage('Congratulations! You have earned this achievement.'); // Set success message
  //   } else {
  //     setModalMessage('You haven\'t earned this achievement yet. Complete 1 goal to unlock it.'); // Set error message
  //   }
  //   setIsModalOpen(true); // Open the modal
  // };

  // const handleCloseModal = () => {
  //   console.log('Closing modal'); // 添加调试输出
  //   setIsModalOpen(false); // Close the modal
  // };



  const handleComplete = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setIsCompleted((prevIsCompleted) => !prevIsCompleted);
  };

  const [isEditModalOpen, setEditModalOpen] = useState(false);


  return (
    <div
      className={`${styles.achievement} ${isColored ? styles.colored : ''}`}
      id={achievement._id}

      style={{ backgroundColor: isColored ? color : '' }}
    // onClick={handleCardClick}  // 添加这一行，将点击事件绑定到卡片上

    >
      <div className={`${styles["image-container"]} ${isColored ? '' : styles.grayscale}`}>
        <img className={styles.achive} src={achievement.imagePath} alt='achive' style={{ filter: isColored ? 'none' : 'grayscale(100%)' }} />
      </div>

      <div className={isCompleted ? `${styles["achievement-description"]} ${styles["completed-task"]}` : styles["achievement-description"]}>
        <p>{achievement.description}</p>
      </div>

      <div className={isCompleted ? `${styles["achievement-date"]} ${styles["completed-task"]}` : styles["achievement-date"]}>
        <p>{achievementDate}</p>
      </div>


      {/* Modal
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
        <div className="modal-content">
          <p>{modalMessage}</p>
          <button onClick={() => {
            console.log('Closing modal button clicked'); // 添加调试输出
            setIsModalOpen(false);
          }}>×</button>

        </div>
      </Modal> */}




    </div>
  );
}












