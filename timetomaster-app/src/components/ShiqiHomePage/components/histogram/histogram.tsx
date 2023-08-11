import styles from './histogram.module.scss';
import React from 'react';

import { ComposedChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LabelList, ReferenceLine, Line } from 'recharts';
import { useState } from 'react';

import Record from '@/models/record';

interface HistogramProps {
    records: Record[];
}

export default function Histogram({ records }: HistogramProps) {
    const [selectedPeriod, setSelectedPeriod] = useState('day'); // 初始统计周期为日

    const handlePeriodChange = (newPeriod: string) => {
        setSelectedPeriod(newPeriod);
    };

    const getDataForPeriod = () => {
        const today = new Date(); // 当前日期
        const daysInPeriod = selectedPeriod === 'day' ? 10 : 7 * 10; // 根据周期确定天数

        const filteredData = records.filter((dataPoint) => {
            const dataDate = new Date(dataPoint.recordsDate);
            return dataDate >= new Date(today.getTime() - daysInPeriod * 24 * 60 * 60 * 1000);
        });

        // 对过滤后的数据进行排序，使日期近的排在前面
        const sortedData = filteredData.sort((a, b) => {
            return new Date(b.recordsDate).getTime() - new Date(a.recordsDate).getTime();
        });
        console.log("Sorted Data:", sortedData);

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
            <div className={styles.chartHeader}>
                <div className={styles.chartTitle}>
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
            <div className={styles.chartContent}>
                <div className={styles.histogram}>
                    <ComposedChart
                        className={styles.customChart}
                        width={800}
                        height={400}
                        data={getDataForPeriod()} // 使用根据统计周期获取的数据
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                        <XAxis dataKey="recordsDate" stroke="#494949" axisLine={false} tickLine={false}
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
                        <Tooltip contentStyle={{ backgroundColor: '#333', color: '#f3f3f2' }} />
                        <Bar dataKey="Time" fill="#d1cd8e" barSize={30} >
                            <LabelList dataKey="hours" position="top" />
                        </Bar>
                        <Line type="linear" dataKey="Time" stroke="#a7b798" strokeWidth={2} dot={true} />
                    </ComposedChart>
                </div>
            </div>
        </div>

    );
};
