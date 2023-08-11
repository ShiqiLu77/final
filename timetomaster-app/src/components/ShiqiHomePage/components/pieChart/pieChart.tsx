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
    const COLORS = ['#9c9b6c', '#cecc99', '#9fb2a2', '#dcc8cb','#bc959b', '#51e2b7', '#bc959b'];
    const total = data.reduce((acc, item: MonthlyData) => acc + item.value, 0);
    
  return (

    <div className={styles.chartContainer}>
            <div className = {styles.chartHeader}>
                <div className = {styles.chartTitle}>
                    <h2>Total Time invested &nbsp;</h2> <p>(h)</p>
                </div>
            </div>
            <div className = {styles.chartContent}>
                <div className={styles.histogram}>
                <RechartsPieChart width={500} height={250}>
                <Pie
                    dataKey="value"
                    data={data}
                    cx={100}
                    cy={130}
                    innerRadius={20}
                    outerRadius={100}
                    fill="#8884d8"
                >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                </Pie>
                <Tooltip />
                <Legend 
                    layout="vertical" 
                    align="right" 
                    verticalAlign="middle" 
                    margin={{ top: 0, right: 100, bottom: 30, left: 300 }} 
                />
                </RechartsPieChart>

                

                <div>
                    <h3>Detail</h3>
                    <table>
                    <thead>
                        <tr>
                        <th>Goal</th>
                        <th>Hours</th>
                        <th>Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                        <tr key={item.name}>
                            <td>{item.name}</td>
                            <td>{item.value} h</td>
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
