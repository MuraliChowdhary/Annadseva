import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './components/Home/Home';
import RequestForm from './components/RequestForm/RequestForm';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/request" element={<RequestForm />} />
          <Route path="/" element={<Home />} />
         
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
