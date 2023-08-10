import styles from './histogram.module.scss';
import React from 'react';
import Image from 'next/image';
import { ComposedChart, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LabelList, Label, Brush,ReferenceLine,LineChart,Line } from 'recharts';
import { useState } from 'react';

interface DayData {
    day: string;
    hours: number;
  }
  
  interface HistogramProps {
    data: DayData[];
  }

  const fakeData = [
    { "day": "2023-08-01", "hours": 8 },
    { "day": "2023-08-02", "hours": 6 },
    { "day": "2023-08-03", "hours": 6 },
    { "day": "2023-08-04", "hours": 3 },
    { "day": "2023-08-05", "hours": 7 },
    { "day": "2023-08-06", "hours": 9 },
    { "day": "2023-08-07", "hours": 4 },
    { "day": "2023-08-08", "hours": 5 },
    { "day": "2023-08-09", "hours": 8 },
    { "day": "2023-07-01", "hours": 2 },
    { "day": "2023-07-02", "hours": 6 },
    { "day": "2023-07-03", "hours": 4 },
    { "day": "2023-07-04", "hours": 3 },
    { "day": "2023-07-05", "hours": 7 },
    { "day": "2023-07-06", "hours": 9 },
    { "day": "2023-07-07", "hours": 4 },
    { "day": "2023-07-08", "hours": 5 },
    { "day": "2023-07-09", "hours": 8 },
    { "day": "2023-06-01", "hours": 2 },
    { "day": "2023-06-02", "hours": 6 },
    { "day": "2023-06-03", "hours": 4 },
    { "day": "2023-06-04", "hours": 3 },
    { "day": "2023-06-05", "hours": 7 },
    { "day": "2023-06-06", "hours": 9 },
    { "day": "2023-06-07", "hours": 4 },
    { "day": "2023-06-08", "hours": 5 },
    { "day": "2023-06-09", "hours": 8 },
    { "day": "2023-05-01", "hours": 2 },
    { "day": "2023-05-02", "hours": 6 },
    { "day": "2023-05-03", "hours": 4 },
    { "day": "2023-05-04", "hours": 3 },
    { "day": "2023-05-05", "hours": 7 }
]


export default function Histogram({ data }: HistogramProps) {
    const [selectedPeriod, setSelectedPeriod] = useState('day'); // 初始统计周期为日

    const handlePeriodChange = (newPeriod: string) => {
        setSelectedPeriod(newPeriod);
    };

    const getDataForPeriod = () => {
        const today = new Date(); // 当前日期
        const daysInPeriod = selectedPeriod === 'day' ? 10 : 7 * 10; // 根据周期确定天数
    
        const filteredData = fakeData.filter((dataPoint) => {
            const dataDate = new Date(dataPoint.day);
            return dataDate >= new Date(today.getTime() - daysInPeriod * 24 * 60 * 60 * 1000);
        });
        
        // 对过滤后的数据进行排序，使日期近的排在前面
        const sortedData = filteredData.sort((a, b) => {
            return new Date(b.day).getTime() - new Date(a.day).getTime();
        });
    
        return sortedData;
    };

    const getXAxisLabel = () => {
        const today = new Date(); // 当前日期
        const labels = [];

        if (selectedPeriod === 'day') {
            for (let i = 9; i >= 0; i--) {
                const date = new Date(today.getTime() - i * 24 * 60 * 60 * 1000);
                const month = date.getMonth() + 1;
                const day = date.getDate();
                labels.push(`${month}-${day}`);
            }
        } else if (selectedPeriod === 'week') {
            for (let i = 9; i >= 0; i--) {
              const startOfWeek = new Date(today.getTime() - i * 7 * 24 * 60 * 60 * 1000);
              const endOfWeek = new Date(startOfWeek.getTime() + 6 * 24 * 60 * 60 * 1000);
              const startMonth = startOfWeek.getMonth() + 1;
              const startDay = startOfWeek.getDate();
              const endMonth = endOfWeek.getMonth() + 1;
              const endDay = endOfWeek.getDate();
              labels.push(`${startMonth}-${startDay} - ${endMonth}-${endDay}`);
            }
          } else if (selectedPeriod === 'month') {
            for (let i = 9; i >= 0; i--) {
              const startOfMonth = new Date(today.getFullYear(), today.getMonth() - i, 1);
              const endOfMonth = new Date(today.getFullYear(), today.getMonth() - i + 1, 0);
              const startMonth = startOfMonth.getMonth() + 1;
              const startDay = startOfMonth.getDate();
              const endMonth = endOfMonth.getMonth() + 1;
              const endDay = endOfMonth.getDate();
              labels.push(`${startMonth}-${startDay} - ${endMonth}-${endDay}`);
            }
          }

        return labels;
    };


    return (
        <div className={styles.chartContainer}>
            <div className = {styles.chartHeader}>
                <div className = {styles.chartTitle}>
                    <h2>Recent Time invested &nbsp;</h2> <p>(min)</p>
                </div>
                
                <div className={styles.buttonContainer}>
                    <div className={styles.buttonHighlight}
                    style={{
                        left: `${selectedPeriod === 'day' ? 5 : selectedPeriod === 'week' ? 38.33 : 71.66}%`
                    }}></div>
                    <button className={`${styles.button} ${selectedPeriod === 'day' ? styles.selected : ''}`} onClick={() => handlePeriodChange('day')}>Day</button>
                    <button className={`${styles.button} ${selectedPeriod === 'week' ? styles.selected : ''}`} onClick={() => handlePeriodChange('week')}>Week</button>
                    <button className={`${styles.button} ${selectedPeriod === 'month' ? styles.selected : ''}`} onClick={() => handlePeriodChange('month')}>Month</button>
                    
                    <div className={styles.verticalLine} style={{ left: '33.33%' }}></div>
                    <div className={styles.verticalLine} style={{ left: '66.66%' }}></div>
                
                </div>
            </div>
            <div className = {styles.chartContent}>
                <div className={styles.histogram}>
                <ComposedChart
                    className={styles.customChart} 
                    width={800}
                    height={400}
                    data={getDataForPeriod()} // 使用根据统计周期获取的数据
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#eee"/>
                    <XAxis dataKey="day" stroke="#494949" axisLine={false} tickLine={false}
                        tickFormatter={(value) => {
                            const date = new Date(value);
                            const month = date.getMonth() + 1;
                            const day = date.getDate();
                            return `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`; // 根据value的日期格式化
                        }}
                    >
                        <ReferenceLine y={0} stroke="#494949" />
                    </XAxis>
                    <YAxis stroke="#494949" axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ backgroundColor: '#333', color: '#f3f3f2' }}/>
                    <Bar dataKey="hours" fill="#d1cd8e" barSize={30} >
                        <LabelList dataKey="hours" position="top" />
                    </Bar>
                    <Line type="linear" dataKey="hours" stroke="#a7b798" strokeWidth={2} dot={true} />
                </ComposedChart>
                </div>  
            </div>
        </div>
       
    );
};
