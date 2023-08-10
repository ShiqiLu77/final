import styles from './statisticsPage.module.scss';
import React, { useState }  from 'react';
import Header from './components/header/header';
import Histogram from './components/histoGram/histogram';
import PieChart from './components/pieChart/pieChart';



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

      const data = [
        { name: 'January', value: 400 },
        { name: 'February', value: 300 },
        { name: 'March', value: 300 },
        // ... 其他月份
      ];
      

  return (
    <div className= {styles.pageContainer}>
      <Header selectedTab={selectedTab} />

      <main className={styles.mainContent}>
        <div className = {styles.topBlock}>
            <div className = {styles.overallContent}>
                <h3>5H 50min</h3>
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
            <Histogram data={fakedata}/> 
            <PieChart data={data}/> 
        </div>

      </main>
      
      <footer className="footer">
        <div className = {styles.footContent}>copyright@ 2023 northeastern university</div>
      </footer>
    </div>
  );
}
