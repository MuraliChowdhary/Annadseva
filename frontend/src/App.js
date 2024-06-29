import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Aboutus from "./components/Aboutus";
import AdminDashboard from "./components/Admindashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";
import UserRegistration from "./components/userRegistration";
import UserTypeSelection from "./components/UserTypeSelection";
import VolunteerDashboard from "./components/VolunteerDashboard";
import Donate from "./components/Donate";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<UserRegistration />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/user-type-selection" element={<UserTypeSelection />} />
          <Route path="/volunteer/dashboard" element={<VolunteerDashboard />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
