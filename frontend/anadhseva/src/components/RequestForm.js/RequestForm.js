// src/components/RequestForm.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './RequestForm.css'; // Import the CSS file
const RequestForm = () => {
  const [formData, setFormData] = useState({
   receiverName: 'john',
    receiverId: '60d5f60b8f634d3f0c8b4567',
    loc: 'hyd',
    foodItems: [],
    quantity: 0,
    status: 'open'
    
  });
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'foodItems') {
      setFormData({
        ...formData,
        [name]: value.split(',').map(item => item.trim())
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  

  useEffect(() => {
    if (submitted) {
      
      setFormData({
      foodItems: '',
      quantity: ''
    });
     setSubmitted(false); // Reset submitted to false
    }
  }, [submitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log(formData)
      const response = await axios.post('http://localhost:5000/api/request/request', {
        ...formData
      })
      console.log(formData)
      console.log('Request submitted successfully', response.data);
      alert('Success');
      setSubmitted(!submitted);
      // Optionally close the form or provide feedback to the user
    } catch (error) {
      console.error('Error submitting request', error);
      // Handle error (e.g., display an error message)
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="request-form-overlay">
        <div className="request-form-container">
          <button className="close-button" onClick={handleClose}>×</button>
          <h2>Submit a Request</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <input
                type="text"
                name="foodItems"
                value={formData.foodItems}
                onChange={handleChange}
                placeholder="Please enter food items required (separated by comma)"
                required
              />
            </label>
            <label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="Please enter quantity"
                required
              />
            </label>
            <button type="submit">Submit Request</button>
          </form>
        </div>
      </div>
    )
  );
};

export default RequestForm;
