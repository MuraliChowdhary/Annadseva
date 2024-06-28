import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FaCamera, FaClock, FaMapMarkerAlt, FaUtensils, FaWeight } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DonationForm = () => {
  const [foodItems, setFoodItems] = useState('');
  const [quantity, setQuantity] = useState('');
  const [shelfLife, setShelfLife] = useState('');
  const [location, setLocation] = useState('');
  const [picture, setPicture] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('foodItems', foodItems);
    formData.append('quantity', quantity);
    formData.append('shelfLife', shelfLife);
    formData.append('location', location);
    formData.append('picture', picture);

    try {
      const response = await axios.post('http://localhost:4000/api/donations', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Donation submitted successfully!');
      setShowModal(false);
      resetForm();
    } catch (error) {
      console.error('Error submitting donation:', error);
      toast.error('Failed to submit donation.');
    }
  };

  const resetForm = () => {
    setFoodItems('');
    setQuantity('');
    setShelfLife('');
    setLocation('');
    setPicture(null);
  };

  return (
    <div className="container">
      <Button onClick={() => setShowModal(true)} className="mb-3" style={styles.greenButton}>
        <FaUtensils className="me-2" /> Donate Food Items
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Donate Food Items</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-8" style={styles.formContainer}>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">
                    <FaUtensils className="me-2" />
                    Food Items:
                  </label>
                  <input
                    type="text"
                    value={foodItems}
                    onChange={(e) => setFoodItems(e.target.value)}
                    className="form-control"
                    style={{ width: '100%' }} // Adjust width of input
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <FaWeight className="me-2" />
                    Quantity:
                  </label>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="form-control"
                    style={{ width: '100%' }} // Adjust width of input
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <FaClock className="me-2" />
                    Shelf Life (in hours):
                  </label>
                  <input
                    type="number"
                    value={shelfLife}
                    onChange={(e) => setShelfLife(e.target.value)}
                    className="form-control"
                    style={{ width: '100%' }} // Adjust width of input
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <FaMapMarkerAlt className="me-2" />
                    Location:
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="form-control"
                    style={{ width: '100%' }} // Adjust width of input
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <FaCamera className="me-2" />
                    Picture:
                  </label>
                  <input
                    type="file"
                    onChange={(e) => setPicture(e.target.files[0])}
                    className="form-control"
                    style={{ width: '100%' }} // Adjust width of input
                    required
                  />
                </div>
                <Button type="submit" className="btn btn-success">
                  Submit Donation
                </Button>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* ToastContainer for displaying toasts */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

    </div>
  );
};

const styles = {
  formContainer: {
    marginRight: '20px',
  },
  greenButton: {
    backgroundColor: '#28a745',
    borderColor: '#28a745',
  },
};

export default DonationForm;
