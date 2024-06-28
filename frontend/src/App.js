import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Aboutus from './components/Aboutus';
import AdminDashboard from './components/Admindashboard';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
    
    
          <Route path="/aboutus" element={<Aboutus/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/admin" element={<AdminDashboard/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
