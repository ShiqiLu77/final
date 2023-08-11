import styles from './mainPage.module.scss';
import React, { useState, useEffect } from 'react';
import { getAllGoal, updateGoal } from './../../services/goal-service';

import Header from './components/header/header';
import GoalCardMain from './components/goalCard/goalCard2';
import Calendar from './components/calendar/calendar';
import CreateGoalModal from './components/goalModal/createGoalModal';
import GoalDetail from './components/goalDetail/goalDetail';
import CreateRecordGoalModal from './components/submit_time_page_files/createRecordModal';

import Goal from '@/models/goal';
import Record from '@/models/record';

export default function MainPage() {
  const [goals, setGoals] = useState<Goal[]>([]);

  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [createRecordModalOpen, setCreateRecordModalOpen] = useState(false);
  const [goalDetailOpen, setGoalDetailOpen] = useState(true);
  const [currentGoal, setCurrentGoal] = useState<Goal>();

  const [selectedTab, setSelectedTab] = useState('Today');

  // Display modal to edit goal
  const handleEdit = (goal: Goal) => {
    setCurrentGoal(goal);
    setGoalDetailOpen(true);
  };

  // Display modal to add record
  const handleEditRecord = (goal: Goal) => {
    setCurrentGoal(goal);
    setCreateRecordModalOpen(true);
  };


  // Create new goal
  const handleCreateGoal = (newGoal: Goal) => {
    setGoals([...goals, newGoal]);
    setCreateModalOpen(false);
  };

  // Create new record
  const handleCreateRecord = (newRecord: Record) => {
    setCreateRecordModalOpen(false);
  };

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
  }, [currentGoal, goalDetailOpen]);


  return (
    <div className={styles.pageContainer}>
      <Header selectedTab={selectedTab} />

      <main className={styles.mainContent}>
        <div className={styles.selectorContainer}>
          <div className={styles.addButton}>
            <div className={styles.innerCircle}>
              <span className={styles.plusSign}
                onClick={() => setCreateModalOpen(true)}>+</span>
            </div>
          </div>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.goalListContainer}>
            <div className={styles.goalList}>
              {goalCards}
            </div>
          </div>
          <div className={styles.goalDetail}>
            <GoalDetail isOpen={goalDetailOpen}
              goal={currentGoal || null}
              onClose={() => setGoalDetailOpen(false)}
              addRecord = {handleEditRecord}
            />
          </div>
          <div className={styles.calendarContainer}>
            <Calendar />
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className={styles.footContent}>copyright@ 2023 northeastern university</div>
      </footer>

      <CreateGoalModal
        isOpen={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onCreate={handleCreateGoal}
      />

      <CreateRecordGoalModal goal={currentGoal || null}
        isOpen={createRecordModalOpen}
        onClose={() => setCreateRecordModalOpen(false)}
        onSubmit={handleCreateRecord} />
    </div>


  );
}
