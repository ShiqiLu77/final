import styles from './histogram.module.scss';
import React from 'react';
import Image from 'next/image';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LabelList, Label, Brush } from 'recharts';

interface DayData {
    day: string;
    hours: number;
  }
  
  interface HistogramProps {
    data: DayData[];
  }

export default function Histogram({ data }: HistogramProps) {
    return (
        <BarChart
        className={styles.customChart} 
          width={800}
          height={400}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
        <CartesianGrid strokeDasharray="3 3" stroke="#eee"/>
        <XAxis dataKey="day" stroke="#494949">
            {/* <Label value="Days" offset={0} position="insideBottom" /> */}
        </XAxis>
        <YAxis stroke="#494949"/>
        <Tooltip contentStyle={{ backgroundColor: '#333', color: '#f3f3f2' }}/>
        <Bar dataKey="hours" fill="#d1cd8e" barSize={30} >
            <LabelList dataKey="hours" position="top" />
        </Bar>
        {/* <Brush dataKey="day" height={30} stroke="#8884d8" /> */}
        </BarChart>
    );
};
