"use client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../components/LandingPage/homepage';
import ShiqiPage from '../components/ShiqiHomePage/goalsPage'; 
import StatisticsPage from '../components/ShiqiHomePage/statisticsPage';
import JiaweiPage from '../components/JiaweiHomePage/jwpage'; 
import JinlingPage from '../components/JinlingHomePage/jlpage';
import SubmitTimePage from '../components/submit_time_page_files/SubmitTimePage';
import TomatoClockDiv from '../components/TomatoClock/tomatoClockpage';
import TaskDetailPage from '../components/taskDetail/taskDetailPage';
import CreateNewGoal from '../components/CreateNewGoal/CreateNewGoal';
import Calendar from '../components/Calendar/Calendar';
export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/" element={<StatisticsPage />} /> */}
        <Route path="/sq" element={<ShiqiPage />} />
        <Route path="/jw" element={<JiaweiPage />} />
        <Route path="/jl" element={<JinlingPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
        <Route path="/goals" element={<ShiqiPage />} />
        <Route path="/submitTime" element={<SubmitTimePage />} />
        <Route path="/tomato" element={<TomatoClockDiv />} />
        <Route path="/taskDetail" element={<TaskDetailPage />} />
        <Route path="/createNew" element={<CreateNewGoal />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
  }

