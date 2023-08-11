import styles from './statisticsPage.module.scss';
import React, { useState, useEffect } from 'react';

import { getAllRecord, searchRecord } from './../../services/record-service';

import Header from './components/header/header';
import Histogram from './components/histogram/histogram';
import PieChart from './components/pieChart/pieChart';

import Record from '@/models/record';

export default function StatisticsPage() {
  const [records, setRecords] = useState<Record[]>([]);

  const [selectedTab, setSelectedTab] = useState('Statistics');

  const fetchAllRecords = () => {
    getAllRecord().then((items) => {
      setRecords(items);
    });
  };

  // Fetch All goals
  useEffect(() => {
    fetchAllRecords();
  }, []);


  const pieData = [
    { name: 'January', value: 400 },
    { name: 'February', value: 300 },
    { name: 'March', value: 300 },
    { name: 'Apil', value: 300 },
  ];


  return (
    <div className={styles.pageContainer}>
      <Header selectedTab={selectedTab} />

      <main className={styles.mainContent}>
        <div className={styles.topBlock}>
          <div className={styles.overallContent}>
            <h3>5H 50min</h3>
            <p>Total Time</p>
          </div>
          <div className={styles.overallContent}>
            <h3>2 days</h3>
            <p>Steak</p>
          </div>
          <div className={styles.overallContent}>
            <h3>3</h3>
            <p>Records</p>
          </div>
        </div>

        <div className={styles.bottomBlock}>
          <Histogram records={records} />
          <PieChart data={pieData} />
        </div>

      </main>

      <footer className="footer">
        <div className={styles.footContent}>copyright@ 2023 northeastern university</div>
      </footer>
    </div>
  );
}
