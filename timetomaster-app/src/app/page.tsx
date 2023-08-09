"use client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../components/LandingPage/homepage';
import ShiqiPage from '../components/ShiqiHomePage/goalsPage'; 
import StatisticsPage from '../components/ShiqiHomePage/statisticsPage';
import JiaweiPage from '../components/JiaweiHomePage/jwpage'; 
import JinlingPage from '../components/JinlingHomePage/jlpage';

export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sq" element={<ShiqiPage />} />
        <Route path="/jw" element={<JiaweiPage />} />
        <Route path="/jl" element={<JinlingPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
      </Routes>
    </BrowserRouter>
  );
  }

