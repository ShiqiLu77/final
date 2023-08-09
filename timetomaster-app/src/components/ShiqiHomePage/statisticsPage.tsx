import styles from './statisticsPage.module.scss';
import React, { useState }  from 'react';
import Header from './components/header/header';



export default function sqpage() {
    const [selectedTab, setSelectedTab] = useState('Statistics');

  return (
    <div className= {styles.pageContainer}>
      <Header selectedTab={selectedTab} />

      <main className={styles.mainContent}>
        <div className = {styles.topBlock}>
            <div className = {styles.overallContent}>
                <h3>5H50min</h3>
                <p>Total Time</p>
            </div>
            <div className = {styles.overallContent}>
                <h3>2 days</h3>
                <p>Steak</p>
            </div>
            <div className = {styles.overallContent}>
                <h3>3</h3>
                <p>Records</p>
            </div>
        </div>

        <div className={styles.bottomBlock}>
            <div className={styles.chartContainer}>
                <div className={styles.chartTime}>
                    <div className = {styles.chartHeader}>
                        <h2>Recent Time invested(min)</h2>
                    </div>
                </div>
            </div>
            <div className={styles.chartContainer}>
                <div className={styles.chartType}>
                    <div className = {styles.chartHeader}>
                        <h2>Goals Time invested(min)</h2>
                    </div>
                </div>
            </div>
        </div>

      </main>
      
      <footer className="footer">
        <div className = {styles.footContent}>copyright@ 2023 northeastern university</div>
      </footer>
    </div>
  );
}
