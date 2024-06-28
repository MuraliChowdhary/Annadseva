// src/components/Home/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/request');
  };

  return (
    <div style={{backgroundColor:'red'}}>
      <p>This is the home page</p>
      <button onClick={handleClick}>Add Request</button>
    </div>
  );
};

export default Home;
