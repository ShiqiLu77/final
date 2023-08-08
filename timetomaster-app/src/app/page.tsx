"use client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../components/LandingPage/homepage';
import ShiqiPage from '../components/ShiqiHomePage/homepage'; 
import JiaweiPage from '../components/JiaweiHomePage/homepage'; 
import JinlingPage from '../components/JinlingHomePage/homepage';

export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sq" element={<ShiqiPage />} />
        <Route path="/jw" element={<JiaweiPage />} />
        <Route path="/jl" element={<JinlingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

