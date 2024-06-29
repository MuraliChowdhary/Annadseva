<<<<<<< HEAD
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Aboutus from './components/Aboutus';
import AdminDashboard from './components/Admindashboard';
import Login from './components/Login';
import Homepage from './components/Homepage';
import VolunteerActiveRequests from './components/VolunteerDashboard';
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
>>>>>>> origin/master
import './App.css';
import UserRegistration from './components/userRegistration';
import UserTypeSelection from './components/UserTypeSelection';
import VolunteerDashboard from './components/VolunteerDashBoard/volunteerDashboard';
import Log from './components/Logs/log';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
<<<<<<< HEAD
          <Route path="/homepage" element={<Homepage/>} />
    
          <Route path="/aboutus" element={<Aboutus/>} />
          <Route path="/contactus" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<UserRegistration/>} />
          <Route path="/admin" element={<AdminDashboard/>} />
          <Route path="/user-type-selection" element={<UserTypeSelection />} />
          <Route path="/volunteer/dashboard" element={<VolunteerDashboard />} />
          <Route path="/volunteer" element={<VolunteerActiveRequests/>} />

=======


          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<UserRegistration />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/user-type-selection" element={<UserTypeSelection />} />
          <Route path="/volunteer/dashboard" element={<VolunteerDashboard />} />
          <Route path="/log" element={<Log />} />
>>>>>>> origin/master
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
