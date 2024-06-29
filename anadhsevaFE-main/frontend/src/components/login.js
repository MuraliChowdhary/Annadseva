import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Ensure this CSS file is imported for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setIsOtpSent(true);
        setMessage('OTP sent');
      } else {
        alert('Error sending OTP');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending OTP');
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/otpverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
      });
      if (response.ok) {
        navigate('/user-type-selection');
      } else {
        alert('Invalid OTP');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error validating OTP');
    }
  };

  return (
    <div className="login-form-container">
      {!isOtpSent ? (
        <form onSubmit={handleEmailSubmit} className="login-form">
          <h2>Login</h2>
          <label>
            Email:
            <input type="email" placeholder='Enter Your Email' name="email" value={email} onChange={handleEmailChange} required />
          </label>
          <button type="submit" className="login-button">Login</button>
        </form>
      ) : (
        <form onSubmit={handleOtpSubmit} className="otp-form">
          <label>
            Enter OTP:
            <input type="text" name="otp" value={otp} onChange={(e) => setOtp(e.target.value)} required />
          </label>
          <button type="submit" className="otp-button">Submit OTP</button>
        </form>
      )}
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Login;
