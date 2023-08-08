import { Link } from "react-router-dom";
import styles from './homepage.module.scss';

export default function HomePage() {
  return (
    <div className = {styles.welcome}>
      <h1>Welcome</h1>
      <nav>
        <div className = {styles.a} id = {styles.sq}><Link to="/sq">Page Shiqi</Link></div>
        <div className = {styles.a}><Link to="/jw">Page Jiawei</Link></div>
        <div className = {styles.a}><Link to="/jl">Page Jingling</Link></div>
      </nav>
    </div>
  );
}