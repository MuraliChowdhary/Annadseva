// src/App.js
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import RequestForm from './components/RequestForm.js/RequestForm'; // Corrected import path

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/request"
            element={<RequestForm setIsFormVisible={setIsFormVisible} />}
          />
          <Route
            path="/"
            element={
              isFormVisible ? (
                <RequestForm setIsFormVisible={setIsFormVisible} />
              ) : (
                <Home setIsFormVisible={setIsFormVisible} />
              )
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
