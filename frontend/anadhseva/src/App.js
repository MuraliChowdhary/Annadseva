import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Log from './log';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">

        </header>
        <Routes>
          <Route path="/log" element={<Log />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
