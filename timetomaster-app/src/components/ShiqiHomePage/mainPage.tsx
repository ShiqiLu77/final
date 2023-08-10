import styles from './mainPage.module.scss';
import React, { useState, useEffect } from 'react';
import { getAllGoal, updateGoal, deleteGoal } from './../../services/goal-service';

import Header from './components/header/header';
import TypeSelector from './components/typeSelector/typeSelector';
import GoalCardMain from './components/goalCard/goalCard2';
import CreateGoalModal from './components/goalModal/createGoalModal';
import EditGoalModal from './components/goalModal/editGoalModal';

import Goal from '@/models/goal';


export default function GoalsPage() {
  const [goals, setGoals] = useState<Goal[]>([]);

  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentGoal, setCurrentGoal] = useState<Goal>(); 

  const [selectedTab, setSelectedTab] = useState('Today');

  // Display modal to edit goal
  const handleEdit = (goal: Goal) => {
    setCurrentGoal(goal);
    setEditModalOpen(true);
  };

  // Create new goal
  const handleCreate = (newGoal: Goal) => {
    setGoals([...goals, newGoal]);
    setCreateModalOpen(false);
  };

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
  const goalCards = goals.map((goal) =>
    <GoalCardMain
      key={goal._id}
      goal={goal}
      onEdit={() => handleEdit(goal)}
    ></GoalCardMain>);

  const fetchAllGoals = () => {
    getAllGoal().then((items) => {
      setGoals(items);
    });
  };

  useEffect(() => {
    fetchAllGoals();
    console.log("editModalOpen changed:", editModalOpen);
  }, [editModalOpen]);

  // search goal based on type progess/completed
  const [activeButton, setActiveButton] = useState('All');
  const handleButtonClick = (buttonLabel: string) => {
    setActiveButton(buttonLabel);
    // 这里你可以将选中的按钮信息发送给父组件或者进行其他操作
  };

  return (
    <div className={styles.pageContainer}>
      <Header selectedTab={selectedTab} />

      <main className={styles.mainContent}>
        <div className={styles.selectorContainer}>
          <TypeSelector activeButton={activeButton} onButtonClick={handleButtonClick} />
          <div className={styles.addButton}>
            <div className={styles.innerCircle}>
              <span className={styles.plusSign} onClick={() => setCreateModalOpen(true)}>+</span>
            </div>
          </div>
        </div>

        <div className={styles.goalList}>{goalCards}</div>
      </main>

      <footer className="footer">
        <div className={styles.footContent}>copyright@ 2023 northeastern university</div>
      </footer>

      <CreateGoalModal  // NEW
        isOpen={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onCreate={handleCreate}
      />

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
