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
 import layout from './layout/layout'
import Layout from './layout/layout';
import RoadmapPage from './pages/roadmap';
import PageNotFound from './pages/pageNotFound';


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



          <Route path="*" element={<PageNotFound/>} />
    </Routes>
    
    </>
 

  );
}

