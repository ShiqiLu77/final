import styles from './statisticsPage.module.scss';
import React, { useState }  from 'react';
import Header from './components/header/header';
import Histogram from './components/histogram/histogram';



export default function StatisticsPage() {
    const [selectedTab, setSelectedTab] = useState('Statistics');

    const fakedata = [
        { day: 'Mon', hours: 4 },
        { day: 'Tue', hours: 5 },
        { day: 'Wed', hours: 3 },
        { day: 'Thu', hours: 6 },
        { day: 'Fri', hours: 2 },
        { day: 'Sat', hours: 4 },
        { day: 'Sun', hours: 3 },
        { day: 'Sun', hours: 3 },
        { day: 'Sun', hours: 3 },
        { day: 'Sun', hours: 3 },
      ];

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
                    <div className = {styles.chartTitle}>
                        <h2>Recent Time invested &nbsp;</h2> <p>(min)</p>
                    </div>
                    <div className = {styles.chartContent}>
                        <Histogram data={fakedata}/>    
                    </div>
            </div>
            <div className={styles.chartContainer}>
                    <div className = {styles.chartTitle}>
                        <h2>Goals Time invested &nbsp;</h2> <p>(min)</p>
                    </div>
                    <div className = {styles.chartContent}>
                        <Histogram data={fakedata}/>    
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
