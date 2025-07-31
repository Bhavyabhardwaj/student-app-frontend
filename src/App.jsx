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


export default function App() {
  return (
    <Layout><Home/>
    </Layout>
  //  <Routes>
  //      <Route path="/" element={<Home />} />
  //       <Route path="/login" element={<Login />} />
  //        <Route path="/signup" element={<Signup/>} />
        
  //       <Route path="/goal" element={<Goal />} />
        
  //      <Route path="/dashboard" element={<Dashboard />} />


  //  </Routes>

  );
}

