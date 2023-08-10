"use client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import LandingPage from '../components/LandingPage/homepage';
import GoalsPage from '../components/ShiqiHomePage/goalsPage'; 
import StatisticsPage from '../components/ShiqiHomePage/statisticsPage';
import JiaweiPage from '../components/JiaweiHomePage/jwpage'; 
import JinlingPage from '../components/JinlingHomePage/jlpage';

import Calendar from '../components/Calendar/Calendar';

export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/" element={<GoalsPage />} />
        <Route path="/sq" element={<GoalsPage />} />
        <Route path="/jw" element={<JiaweiPage />} />
        <Route path="/jl" element={<JinlingPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
        <Route path="/goals" element={<GoalsPage />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
  }

