import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      alert('OTP sent to your email.');
      setIsOtpSent(true);
    } catch (error) {
      alert('Error logging in.');
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/verify-otp', { email, otp });
      alert('Login successful.');
      localStorage.setItem('token', response.data.token);
      window.location.href = '/'; // Redirect to home page
    } catch (error) {
      alert('Error verifying OTP.');
    }
  };

  return (
    <div>
      {isOtpSent ? (
        <form onSubmit={handleVerifyOtp}>
          <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} required />
          <button type="submit">Verify OTP</button>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Login;
