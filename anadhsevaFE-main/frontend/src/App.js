import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import UserRegistration from './components/userRegistration';
import UserTypeSelection from './components/UserTypeSelection';
import VolunteerDashboard from './components/VolunteerDashBoard/volunteerDashboard'; // Import the Volunteer Dashboard component
import Login from "./components/login"

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/causes" element={<div>Causes Page</div>} />
          <Route path="/events" element={<div>Events Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<UserRegistration />} />
          <Route path="/user-type-selection" element={<UserTypeSelection />} />
          <Route path="/volunteer/dashboard" element={<VolunteerDashboard />} /> {/* Add this line */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
