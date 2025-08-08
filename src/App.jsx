import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
 import Goal from './pages/goal';
 import Dashboard from './pages/dashboard';

import Layout from './layout/layout';
import RoadmapPage from './pages/roadmap';
import PageNotFound from './pages/pageNotFound';
import Calendar from './pages/navbarPages/calender';
import AboutUs from './pages/navbarPages/aboutUs';
import ContactUs from './pages/navbarPages/contactUs';
import GetPremium from './pages/navbarPages/premium';
import Resources from './pages/navbarPages/resources';
import StudyMaterial from './pages/navbarPages/studyMaterialpages/studyMaterial';
import Achievements from './pages/navbarPages/achievement';
import Progress from './pages/navbarPages/progress';
import Profile from './pages/navbarPages/profile';
import Notifications from './pages/navbarPages/notification';


export default function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/signup" element={<Signup/>} />
         <Route path="/login" element={<Login />} />
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/goal" element={<Goal />} />
          <Route path="/roadmap" element={<RoadmapPage/>} />






           <Route path="/calendar" element={<Calendar/>} />
           <Route path="/about" element={<AboutUs/>} />
           <Route path="/contact" element={<ContactUs/>} />
             <Route path="/premium" element={<GetPremium/>} />
             <Route path="/resources" element={<Resources/>} />
              <Route path="/folders" element={<StudyMaterial/>} />
              <Route path="/achievements" element={<Achievements/>} />
              <Route path="/progress" element={<Progress/>} />
               <Route path="/profile" element={<Profile/>} />
               <Route path="/notifications" element={<Notifications/>} />



          <Route path="*" element={<PageNotFound/>} />
    </Routes>
    
    </>
 

  );
}

