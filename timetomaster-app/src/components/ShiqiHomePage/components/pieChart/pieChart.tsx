import styles from './pieChart.module.scss';
import { PieChart as RechartsPieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

interface MonthlyData {
  name: string;
  value: number;
}

interface MonthlyPieChartProps {
  data: MonthlyData[];
}

export default function MonthlyPieChart ({ data }: MonthlyPieChartProps) {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AB83A1', '#DD345E', '#AA1239'];
    const total = data.reduce((acc, item: MonthlyData) => acc + item.value, 0);
    
  return (

    <div className={styles.chartContainer}>
            <div className = {styles.chartHeader}>
                <div className = {styles.chartTitle}>
                    <h2>Total Time invested &nbsp;</h2> <p>(min)</p>
                </div>
                
                {/* <div className={styles.buttonContainer}>
                    <div className={styles.buttonHighlight}
                    style={{
                        left: `${selectedPeriod === 'day' ? 5 : selectedPeriod === 'week' ? 38.33 : 71.66}%`
                    }}></div>
                    <button className={`${styles.button} ${selectedPeriod === 'day' ? styles.selected : ''}`} onClick={() => handlePeriodChange('day')}>Day</button>
                    <button className={`${styles.button} ${selectedPeriod === 'week' ? styles.selected : ''}`} onClick={() => handlePeriodChange('week')}>Week</button>
                    <button className={`${styles.button} ${selectedPeriod === 'month' ? styles.selected : ''}`} onClick={() => handlePeriodChange('month')}>Month</button>
                    
                    <div className={styles.verticalLine} style={{ left: '33.33%' }}></div>
                    <div className={styles.verticalLine} style={{ left: '66.66%' }}></div>
                
                </div> */}
            </div>
            <div className = {styles.chartContent}>
                <div className={styles.histogram}>
                <RechartsPieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        data={data}
                        cx={200}
                        cy={200}
                        innerRadius={20}
                        outerRadius={80}
                        fill="#8884d8"
                    >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    </Pie>
                    <Tooltip />
                    <Legend 
                        layout="vertical" // 垂直布局
                        align="right" // 右对齐
                        verticalAlign="middle" // 垂直居中
                        margin={{ top: 30, right: 30, bottom: 30, left: 0 }} // 调整边距
                    />
                </RechartsPieChart>
                <div>
                    <h3>明细：</h3>
                    <table>
                    <thead>
                        <tr>
                        <th>月份</th>
                        <th>时间</th>
                        <th>百分比</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                        <tr key={item.name}>
                            <td>{item.name}</td>
                            <td>{item.value} 小时</td>
                            <td>{((item.value / total) * 100).toFixed(2)}%</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                </div>  
            </div>
        </div>

  );
};
