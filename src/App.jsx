import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes,Navigate } from 'react-router-dom';
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
import Feedback from './pages/navbarPages/feedback';
import { useSelector } from 'react-redux';
import UserRoadmaps from './pages/allRoadmaps';
import RoadmapDetails from './pages/roadmapContent';
import RoadmapLayout from './pages/start';
import ContentSuggestion from './pages/contentSuggestion';
import UserContents from './pages/contents';
import ContentDetails from './pages/contentText';
import RoadmapContent from './pages/start';


export default function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  return (
    <>
    <Routes>
          <Route
        path="/"
        element={isLoggedIn ? <Navigate to="/dashboard" /> : <Home />}
          />
     
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />
         <Route path="/signup" element={<Signup/>} />
         <Route path="/login" element={<Login />} />
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/goal" element={<Goal />} />
          <Route path="/roadmap" element={<RoadmapPage/>} />
          <Route path="/allroadmaps" element={<UserRoadmaps/>} />
           <Route path="/contentSuggest" element={<ContentSuggestion/>} />
             <Route path="/myContents" element={<UserContents/>} />
             <Route path="/contentText/:id" element={<ContentDetails/>} />

            <Route path="/roadmap/:id" element={<RoadmapDetails/>} />

            <Route path="/start/:id" element={<RoadmapContent/>} />

          

          






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
                <Route path="/feedback" element={<Feedback/>} />



          <Route path="*" element={<PageNotFound/>} />
    </Routes>
    
    </>
 

  );
}

