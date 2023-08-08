import styles from './sqpage.module.scss';
import React from 'react';

const habits = [
  { id: 1, name: '学习Java' },
  { id: 2, name: '学习Python' },
  { id: 3, name: '学习英语' },
];

export default function sqpage() {
  return (
    <div className= {styles.pageContainer}>
      <header className="header">
        <div className="header-content"></div>
        hearder
      </header>

      <nav className="navigation">
      </nav>

      <main className="main-content">
        main

      </main>
      <footer className="footer">
        foot
      </footer>
    </div>
  );
}
