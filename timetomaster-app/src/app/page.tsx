"use client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../components/LandingPage/homepage';
import ShiqiPage from '../components/ShiqiHomePage/sqpage'; 
import JiaweiPage from '../components/JiaweiHomePage/jwpage'; 
import JinlingPage from '../components/JinlingHomePage/jlpage';
import SubmitTimePage from '../components/submit_time_page_files/SubmitTimePage';
import TomatoClockDiv from '../components/TomatoClock/tomatoClockpage';
export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sq" element={<ShiqiPage />} />
        <Route path="/jw" element={<JiaweiPage />} />
        <Route path="/jl" element={<JinlingPage />} />
        <Route path="/submitTime" element={<SubmitTimePage />} />
        <Route path="/tomato" element={<TomatoClockDiv />} />
      </Routes>
    </BrowserRouter>
  );

  // if (typeof window !== 'undefined') {
  //   // 在浏览器环境中运行的代码
  //   return (
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/" element={<LandingPage />} />
  //         <Route path="/sq" element={<ShiqiPage />} />
  //         <Route path="/jw" element={<JiaweiPage />} />
  //         <Route path="/jl" element={<JinlingPage />} />
  //       </Routes>
  //     </BrowserRouter>
  //   );
  // } else {
  //   // 在服务器端环境中运行的代码，例如返回一个默认的内容或者空的 JSX
  //   return null; // 或者其他适当的内容
  // }  
}

