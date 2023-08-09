import styles from './sqpage.module.scss';
import React from 'react';
import Header from './components/header/header';
import TypeSelector from './components/typeSelector/typeSelector';
import GoalCard from './components/goalCard/goalCard';
const habits = [
  { id: 1, name: '学习Java' },
  { id: 2, name: '学习Python' },
  { id: 3, name: '学习英语' },
];

export default function sqpage() {
  return (
    <div className= {styles.pageContainer}>
      <Header/>

      <main className={styles.mainContent}>
        <TypeSelector/>

        <GoalCard/>
      </main>
      
      <footer className="footer">
        <div className = {styles.footContent}>copyright@ 2023 northeastern university</div>
      </footer>
    </div>
  );
}
