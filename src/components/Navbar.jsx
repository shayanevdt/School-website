// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

// Styled components
const StyledAppBar = styled(AppBar)({ backgroundColor: '#4CAF50' });
const StyledButton = styled(Button)({ marginRight: '50px', '&:hover': { backgroundColor: '#388E3C' } });

const Navbar = () => {
  return (
    <StyledAppBar position="sticky">
      <Toolbar>
        <Container maxWidth="lg" align="center">
          <Typography variant="h6" sx={{ flexGrow: 1, color: 'white' }}>
            NEW STAR ENGLISH SCHOOL
          </Typography>
          <StyledButton component={Link} to="/" color="inherit">Home</StyledButton>
          <StyledButton component={Link} to="/aboutus" color="inherit">About Us</StyledButton>
          <StyledButton component={Link} to="/academics" color="inherit">Academics </StyledButton>
          <StyledButton component={Link} to="/admission" color="inherit">Admission</StyledButton>
          <StyledButton component={Link} to="/contactus" color="inherit">Contact</StyledButton>
        </Container>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
