import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Academics = () => {
  const classes = [
    { grade: "Nursery", subjects: "Basic learning, Play, Fun activities" },
    { grade: "Class 1", subjects: "Math, Science, English, Hindi, Social Studies" },
    { grade: "Class 2", subjects: "Math, Science, English, Hindi, Social Studies" },
    { grade: "Class 3", subjects: "Math, Science, English, Hindi, Social Studies" },
    { grade: "Class 4", subjects: "Math, Science, English, Hindi, Social Studies" },
    { grade: "Class 5", subjects: "Math, Science, English, Hindi, Social Studies" },
    { grade: "Class 6", subjects: "Math, Science, English, Hindi, Social Studies, Computer" },
    { grade: "Class 7", subjects: "Math, Science, English, Hindi, Social Studies, Computer" },
    { grade: "Class 8", subjects: "Math, Science, English, Hindi, Social Studies, Computer" },
  ];

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Academics
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {classes.map((classItem, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3}>
              <Box p={2}>
                <Typography variant="h6" component="div" gutterBottom>
                  Class {classItem.grade}
                </Typography>
                <Typography variant="body1">
                  Subjects: {classItem.subjects}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Academics;
