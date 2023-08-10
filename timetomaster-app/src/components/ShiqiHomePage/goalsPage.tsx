import styles from './goalsPage.module.scss';
import React, { useState } from 'react';
import { getAllGoal, updateGoal, deleteGoal } from './../../services/goal-service';

import Header from './components/header/header';
import TypeSelector from './components/typeSelector/typeSelector';
import GoalCard from './components/goalCard/goalCard';
import GoalDetailModal from './components/goalDetail/goalDetail';

import Goal from '@/models/goal';


export default function GoalsPage() {
  const [goals, setGoals] = useState<Goal[]>([]);
  // const [createModalOpen, setCreateModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // 添加浮窗状态
  // const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<Goal>(); // 用于存储选中的目标

  const [selectedTab, setSelectedTab] = useState('Goals');

  // Fetch All goals
  const goalCards = goals.map((goal, index) => 
  <GoalCard 
    key = {goal._id} 
    goal = {goal} 
    onGoalClick = {() => openModal(goal)}
  ></GoalCard>);

  const fetchAllGoals = () => {
    getAllGoal().then((items) => {
      setGoals(items);
    });
  };

  // Display modal to edit goal
  const openModal = (goal:Goal) => {
    setSelectedGoal(goal);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  
  return (
    <div className= {styles.pageContainer}>
      <Header selectedTab={selectedTab} />

      <main className={styles.mainContent}>
        <TypeSelector/>

        <div className={styles.goalList}>
          {goalCards}
        </div>
      </main>
      
      <footer className="footer">
        <div className = {styles.footContent}>copyright@ 2023 northeastern university</div>
      </footer>

      <GoalDetailModal isOpen={isModalOpen} goal={selectedGoal || null} onClose={closeModal} />
    </div>


  );
}
