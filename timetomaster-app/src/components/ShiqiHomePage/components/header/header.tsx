import styles from './header.module.scss';
import React from 'react';
import { Link } from "react-router-dom";

const habits = [
  { id: 1, name: '学习Java' },
  { id: 2, name: '学习Python' },
  { id: 3, name: '学习英语' },
];

export default function sqpage() {
  return (
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>logo</div>
          <div className={styles.navbar}>
            <div className={styles.tab}>
                <Link className = "" to="/jw">
                    Today
                </Link>
            </div>
            <div className={styles.tab}>
                <Link className = {styles.selectedLink} to="/jw">
                    Goals
                </Link>
            </div>
            <div className={styles.tab}>
                <Link className = "" to="/jw">
                    Achievement
                </Link>
            </div>
          </div>
          <div className={styles.setting}>right bar</div>
        </div>
      </header>
  );
}
