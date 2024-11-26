import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const AboutUs = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      
      {/* Mission Section */}
      <Box sx={{ mb: 4, backgroundColor: '#f5f5f5', p: 3, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          Our Mission
        </Typography>
        <Typography variant="body1">
          At [Your School Name], we believe that every child holds the potential to make a positive 
          impact in the world. Our mission is to foster a supportive, innovative, and dynamic learning 
          environment that nurtures curiosity, encourages creativity, and instills values of honesty 
          and responsibility in each student.
        </Typography>
      </Box>

      {/* About Us Section */}
      <Box sx={{ mb: 4, backgroundColor: '#e0f7fa', p: 3, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          About Us
        </Typography>
        <Typography variant="body1">
          With a legacy of [XXV years], [Your School Name] has been a beacon of quality education, focusing 
          on holistic development. From state-of-the-art classrooms to interactive labs, our facilities 
          are designed to create a safe, inclusive, and engaging space for students. Our dedicated team 
          of educators goes beyond traditional teaching to ensure every child reaches their full potential.
        </Typography>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ mb: 4, backgroundColor: '#ffecb3', p: 3, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          Why Choose Us?
        </Typography>
        <ul>
          <li>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              Student-Centered Approach:
            </Typography>
            <Typography variant="body2">
              Our curriculum is designed to balance academic rigor with co-curricular activities, making learning enjoyable and impactful.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              Experienced Faculty:
            </Typography>
            <Typography variant="body2">
              We have a team of highly qualified teachers dedicated to providing personalized guidance to every student.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              Modern Facilities:
            </Typography>
            <Typography variant="body2">
              From digital smart classes to science labs, sports facilities, and creative art studios, we provide a comprehensive environment for all-round development.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              Focus on Values:
            </Typography>
            <Typography variant="body2">
              We emphasize character building, leadership, and community involvement, preparing our students to become responsible global citizens.
            </Typography>
          </li>
        </ul>
      </Box>

      {/* Programs Section */}
      <Box sx={{ mb: 4, backgroundColor: '#e1bee7', p: 3, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          Our Programs
        </Typography>
        <Typography variant="body1">
          Whether it’s our early childhood education, primary and middle school, or high school programs, 
          each stage of learning at [Your School Name] is designed to challenge and inspire students. With 
          regular assessments, interactive projects, and experiential learning, students gain practical 
          skills and deep knowledge in various subjects.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutUs;
