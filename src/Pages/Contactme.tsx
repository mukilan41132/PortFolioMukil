import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import axios from "axios";
import { validateAlphabet } from '../Healper/Validation';
import "../styles/App.css";
import SuccessPage from '../components/SuccessPage.jsx'
import { address } from '../Constent/constent';
const ContactMe = () => {
  const [responseMessage, setResponseMessage] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    if (name === "name") {
      if (name === "" || validateAlphabet(value)) {
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      }
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${address}/api/products`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setResponseMessage(response.data.message);
      setFormData({ name: "", email: "", phone: '', message: "" });

    } catch (error) {
      setResponseMessage("Error: Could not submit the form");
      console.error("API error:", error);
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '600px',
        margin: '40px auto',
        padding: '24px',
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: '#fafafa',
      }}
      component="section"
      aria-label="Contact form"
    >
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mb: 3 }}>
        Contact Me
      </Typography>
      {responseMessage ? (
        <SuccessPage />
      ) : (
        <form onSubmit={handleSubmit} noValidate className='form-container'>
          <TextField
            fullWidth
            size="small"
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            sx={{ mb: 2 }}
            autoComplete="name"
            required
            aria-label="Your Name"
          />
          <TextField
            fullWidth
            label="Your Email"
            size="small"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            sx={{ mb: 2 }}
            autoComplete="email"
            required
            aria-label="Your Email"
          />
          <TextField
            fullWidth
            label="Your Phone Number"
            name="phone"
            size="small"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            sx={{ mb: 2 }}
            autoComplete="tel"
            aria-label="Your Phone Number"
          />
          <TextField
            fullWidth
            label="Your Message"
            size="small"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={4}
            sx={{ mb: 3 }}
            required
            aria-label="Your Message"
          />

          <Button type="submit" size="small" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      )}

    </Box>
  );
};

export default ContactMe;
