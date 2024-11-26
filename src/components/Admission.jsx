// Admission.jsx
import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Admission = () => {
  const navigate = useNavigate();

  const handleApplyNow = () => {
    navigate('/admission-form');
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
        Admission Information
      </Typography>
      <Typography variant="body1" paragraph>
        We are excited to welcome new students to NEW STAR ENGLISH SCHOOL. Here, students receive 
        personalized attention, engaging curriculum, and support to foster their skills and talents.
      </Typography>
      <Box sx={{ my: 3 }}>
        <Typography variant="h5" gutterBottom>
          Admission Process:
        </Typography>
        <Typography variant="body1" paragraph>
          To apply, please fill out the admission form available at our office or on our website. 
          Admission tests and interviews are scheduled on specific dates. For more information, please contact our admissions office.
        </Typography>
        <Button variant="contained" color="primary" onClick={handleApplyNow}>
          Apply Now
        </Button>
      </Box>
    </Container>
  );
};

export default Admission;
