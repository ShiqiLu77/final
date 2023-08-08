import { Link } from "react-router-dom";
import './homepage.scss';


export default function HomePage() {
  return (
    <div className = "welcome">
      <h1>Welcome</h1>
      <nav>
        <div><Link to="/sq">Page Shiqi</Link></div>
        <div><Link to="/jw">Page Jiawei</Link></div>
        <div><Link to="/jl">Page Jingling</Link></div>
      </nav>
    </div>
  );
}