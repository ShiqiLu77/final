import styles from './goalsPage.module.scss';
import React, { useState,useEffect } from 'react';
import { getAllGoal, updateGoal, deleteGoal } from './../../services/goal-service';

import Header from './components/header/header';
import TypeSelector from './components/typeSelector/typeSelector';
import GoalCard from './components/goalCard/goalCard';
import EditGoalModal from './components/editGoalModal/editGoalModal';

import Goal from '@/models/goal';


export default function GoalsPage() {
  const [goals, setGoals] = useState<Goal[]>([]);
  // const [createModalOpen, setCreateModalOpen] = useState(false);

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentGoal, setCurrentGoal] = useState<Goal>(); // 用于存储选中的目标

  const [selectedTab, setSelectedTab] = useState('Goals');

   // Display modal to edit goal
   const handleEdit = (goal: Goal) => {
    setCurrentGoal(goal);
    setEditModalOpen(true);
  };

  // // Create new goal
  // const handleCreate = (newGoal: Goal) => {
  //   setGoals([...goals, newGoal]);
  //   setCreateModalOpen(false);
  // };

  // Update a goal
  const handleSave = async () => {
    fetchAllGoals();
    setEditModalOpen(false);
  };

  // Delete a goal
  const handleDelete = React.useCallback(async () => {
    if (!currentGoal) { return; }
    setGoals(goals.filter((goal) => goal._id !== currentGoal._id));
    setEditModalOpen(false);
  }, [currentGoal, goals]);

  // Fetch All goals
  const goalCards = goals.map((goal, index) => 
  <GoalCard 
    key = {goal._id} 
    goal = {goal} 
    onGoalClick = {() => handleEdit(goal)}
  ></GoalCard>);

  const fetchAllGoals = () => {
    getAllGoal().then((items) => {
      setGoals(items);
    });
  };

  useEffect(() => {
    fetchAllGoals();
  },[]);
  
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

      <EditGoalModal
        isOpen={editModalOpen}
        goal={currentGoal || null}
        onClose={() => setEditModalOpen(false)}
        onSave={handleSave}
        onDelete={handleDelete}
      />
    </div>


  );
}
