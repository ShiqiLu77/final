"use client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import LandingPage from '../components/LandingPage/homepage';
import GoalsPage from '../components/ShiqiHomePage/goalsPage'; 
import StatisticsPage from '../components/ShiqiHomePage/statisticsPage';
import JiaweiPage from '../components/JiaweiHomePage/jwpage'; 
import JinlingPage from '../components/JinlingHomePage/jlpage';
<<<<<<< HEAD
import SubmitTimePage from '../components/submit_time_page_files/SubmitTimePage';
import TomatoClockDiv from '../components/TomatoClock/tomatoClockpage';
import TaskDetailPage from '../components/taskDetail/taskDetailPage';
import CreateNewGoal from '../components/CreateNewGoal/CreateNewGoal';
import Calendar from '../components/Calendar/Calendar';
=======
import SubmitTimePage from '../components/ShiqiHomePage/components/submit_time_page_files/SubmitTimePage';
import TomatoClockDiv from '../components/ShiqiHomePage/components/TomatoClock/tomatoClockpage';
import TaskDetailPage from '../components/ShiqiHomePage/components/editGoalModal/editGoalModal'
import CreateNewGoal from '../components/CreateNewGoal/CreateNewGoal'
>>>>>>> fefc7c26a4c8cf78c5466bfd72f936385c7f2d3d
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false); // 添加状态

  const openModal = () => {
      setIsModalOpen(true); // 打开浮窗
  };

  const closeModal = () => {
      setIsModalOpen(false); // 关闭浮窗
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
<<<<<<< HEAD
        {/* <Route path="/" element={<StatisticsPage />} /> */}
        <Route path="/sq" element={<ShiqiPage />} />
=======
        {/* <Route path="/" element={<GoalsPage />} /> */}
        <Route path="/sq" element={<GoalsPage />} />
>>>>>>> fefc7c26a4c8cf78c5466bfd72f936385c7f2d3d
        <Route path="/jw" element={<JiaweiPage />} />
        <Route path="/jl" element={<JinlingPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
        <Route path="/goals" element={<GoalsPage />} />
        <Route path="/submitTime" element={<SubmitTimePage />} />
        <Route path="/tomato" element={<TomatoClockDiv />} />
        <Route path="/taskDetail" element={<TaskDetailPage isOpen={true} onClose={closeModal} goal={null} onSave={function (): void {
          throw new Error('Function not implemented.');
        } } onDelete={function (): void {
          throw new Error('Function not implemented.');
        } }/>} />
        <Route path="/createNew" element={<CreateNewGoal />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
  }

