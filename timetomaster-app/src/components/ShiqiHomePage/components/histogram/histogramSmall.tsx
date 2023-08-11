import styles from './histogramSmall.module.scss';
import React from 'react';
import { ComposedChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LabelList, ReferenceLine, LineChart, Line } from 'recharts';
import { useState } from 'react';

import DailyRecord from '@/models/record-daily';


interface HistogramProps {
    dailyRecords: DailyRecord[];
    weeklyRecords: DailyRecord[];
    monthlyRecords: DailyRecord[];
}

export default function HistogramSmall(props: HistogramProps) {
    const [selectedPeriod, setSelectedPeriod] = useState('day');

    const handlePeriodChange = (newPeriod: string) => {
        setSelectedPeriod(newPeriod);
        console.log("Daily Records:", props.weeklyRecords);
    };

    const getDataForPeriod = () => {
        switch (selectedPeriod) {
            case 'day':
                return props.dailyRecords;
            case 'week':
                return props.weeklyRecords;
            case 'month':
                return props.monthlyRecords;
        }
    };

    return (
        <div className={styles.chartContainer}>
            <div className={styles.chartHeader}>
                <div className={styles.chartTitle}>
                    <h2>Recent Time invested &nbsp;</h2> <p>(h)</p>
                </div>

                <div className={styles.buttonContainer}>
                    <div className={styles.buttonHighlight}
                        style={{
                            left: `${selectedPeriod === 'day' ? 5 : selectedPeriod === 'week' ? 38.33 : 71.66}%`
                        }}></div>
                    <button className={`${styles.button} ${selectedPeriod === 'day' ? styles.selected : ''}`} onClick={() => handlePeriodChange('day')}>Day</button>
                    <button className={`${styles.button} ${selectedPeriod === 'week' ? styles.selected : ''}`} onClick={() => handlePeriodChange('week')}>Week</button>
                    <button className={`${styles.button} ${selectedPeriod === 'month' ? styles.selected : ''}`} onClick={() => handlePeriodChange('month')}>Month</button>


                </div>
            </div>
            <div className={styles.chartContent}>
                <div className={styles.histogram}>
                    <ComposedChart
                        className={styles.customChart}
                        width={360}
                        height={200}
                        data={getDataForPeriod()}
                        margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                        <XAxis dataKey="recordsDate" stroke="#494949" axisLine={false} tickLine={false}
                            tick={{ fontSize: 12 }}
                            tickFormatter={(value) => {
                                const date = new Date(value);
                                const month = date.getMonth() + 1;
                                const day = date.getDate();
                                return `${month.toString()}-${day.toString()}`;
                            }}
                        >
                            <ReferenceLine y={0} stroke="#494949" />
                        </XAxis>
                        <YAxis stroke="#494949" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                        <Tooltip contentStyle={{ backgroundColor: '#333', color: '#f3f3f2' }} />
                        <Bar dataKey="totalHours" fill="#d1cd8e" barSize={10} >
                            <LabelList dataKey="totalHours" position="top" />
                        </Bar>
                        <Line type="linear" dataKey="totalHours" stroke="#a7b798"
                            strokeWidth={1} dot={true} />
                    </ComposedChart>
                </div>
            </div>
        </div>

    );
};
