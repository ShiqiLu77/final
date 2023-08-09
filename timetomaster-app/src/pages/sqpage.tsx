import styles from './sqpage.module.scss';
import React from 'react';
import goals from './goals';
const habits = [
  { id: 1, name: '学习Java' },
  { id: 2, name: '学习Python' },
  { id: 3, name: '学习英语' },
];

export default function sqpage() {
  return (
    <div className= {styles.pageContainer}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div >logo</div>
          <div>menu</div>
          <div>right bar</div>
        </div>
      </header>

      <main className="main-content">
        <div className = {styles.typeSelector}>
        </div>
        <div className = {styles.goalList}>
          <div className = {styles.goalCard}>
          </div>

          <div className = {styles.goalCard}>
          </div>

          <div className = {styles.goalCard}>
          </div>

        </div>

      </main>
      <footer className="footer">
        <div className = {styles.footContent}>copyright@ 2023 northeastern university</div>
      </footer>
    </div>
  );
}
