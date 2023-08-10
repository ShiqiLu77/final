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
        <div className = {styles.a}><Link to="/submitTime">Page submit time</Link></div>
        <div className = {styles.a}><Link to="/tomato">tomato</Link></div>
        <div className = {styles.a}><Link to="/taskDetail">taskDetail</Link></div>
        <div className = {styles.a}><Link to="/createNew">create new</Link></div>
        <div className = {styles.a}><Link to="/calendar">calendar</Link></div>
      </nav>
    </div>
  );
}