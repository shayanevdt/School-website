import React from 'react';
import { Container, Typography, Button, Grid, Box } from '@mui/material';

const HomePage = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '50px' }}>
      {/* Header Section */}
      <Box textAlign="center" marginBottom={4}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to [School Name]
        </Typography>
        <Typography variant="h5" color="textSecondary" gutterBottom>
          "Empowering Young Minds for a Brighter Tomorrow"
        </Typography>
        <Box marginTop={3}>
          <Button variant="contained" color="primary" size="large" style={{ marginRight: '10px' }}>
            Admissions Open
          </Button>
          <Button variant="outlined" color="primary" size="large">
            Learn More
          </Button>
        </Box>
      </Box>

      {/* Highlights Section */}l
      <Box marginTop={6} textAlign="center">
        <Typography variant="h4" gutterBottom>
          Why Choose Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Dedicated Faculty
            </Typography>
            <Typography color="textSecondary">
              Experienced and caring teachers to guide students every step of the way.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Modern Infrastructure
            </Typography>
            <Typography color="textSecondary">
              Smart classrooms, labs, and facilities designed for 21st-century learning.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Holistic Development
            </Typography>
            <Typography color="textSecondary">
              Academics, sports, and arts blended for all-round excellence.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Contact Section */}
      <Box marginTop={6} textAlign="center">
        <Typography variant="h4" gutterBottom>
          Get in Touch
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Have questions? Contact us today to learn more about our programs and facilities.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Contact Us
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
