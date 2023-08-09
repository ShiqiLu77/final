"use client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../components/LandingPage/homepage';
import ShiqiPage from '../components/ShiqiHomePage/sqpage'; 
import JiaweiPage from '../components/JiaweiHomePage/jwpage'; 
import JinlingPage from '../components/JinlingHomePage/jlpage';
import SubmitTimePage from '../components/submit_time_page_files/SubmitTimePage';
export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sq" element={<ShiqiPage />} />
        <Route path="/jw" element={<JiaweiPage />} />
        <Route path="/jl" element={<JinlingPage />} />
        <Route path="/submitTime" element={<SubmitTimePage />} />
      </Routes>
    </BrowserRouter>
  );
}

