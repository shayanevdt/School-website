import React from "react";
import { Box, Tabs, Tab, TextField, Button, Grid, MenuItem, Radio, 
  RadioGroup, FormControlLabel, Typography } from "@mui/material";

const AdmissionForm = () => {
  const [currentTab, setCurrentTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <Box sx={{ maxWidth: 1000, mx: "auto", mt: 4, p: 3, boxShadow: 6, borderRadius: 4 }}>
      <Typography variant="h5" gutterBottom>
        Admission Form
      </Typography>

      {/* Tabs for Sections */}
      <Tabs value={currentTab} onChange={handleTabChange} centered>
        <Tab label="General Profile" />
        <Tab label="Enrolment Profile" />
        <Tab label="Facility Profile" />
        <Tab label="Profile Preview" />
      </Tabs>

      {/* Tab Panels */}
      {currentTab === 0 && (
        <Box sx={{ mt: 3 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Student Name" name="name" variant="outlined" required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Date of Birth" name="dob" type="date" InputLabelProps={{ shrink: true }} variant="outlined" required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Mother's Name" name="motherName" variant="outlined" required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Father's Name" name="fatherName" variant="outlined" required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Aadhaar Number" name="aadhaar" variant="outlined" required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Address" name="address" variant="outlined" multiline rows={3} />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label="Class"
                  name="class"
                  select
                  variant="outlined"
                  required
                >
                  {["Nursery", "KG-1","KG-2", "1st", "2nd", "3rd", "4th", "5th", "6st", "7nd", "8rd", "9th", "10th"].map((cls) => (
                    <MenuItem key={cls} value={cls}>
                      {cls}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <RadioGroup row name="gender" defaultValue="Male">
                  <FormControlLabel value="Male" control={<Radio />} label="Male" />
                  <FormControlLabel value="Female" control={<Radio />} label="Female" />
                </RadioGroup>
              </Grid>
            </Grid>
            <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
              <Button type="submit" variant="contained">
                Save
              </Button>
              <Button variant="outlined">Next</Button>
            </Box>
          </form>
        </Box>
      )}

      {currentTab === 1 && (
        <Box sx={{ mt: 3 }}>
        <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        {/* Enrolment Number */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Enrolment Number"
            name="enrolmentNumber"
            variant="outlined"
            required
          />
        </Grid>
        {/* Previous School */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Previous School"
            name="previousSchool"
            variant="outlined"
          />
        </Grid>
        {/* Admission Date */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Admission Date"
            name="admissionDate"
            type="date"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            required
          />
        </Grid>
        {/* Last Year's Attendance */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Last Year's Attendance (%)"
            name="lastAttendance"
            type="number"
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
        <Button type="submit" variant="contained">
          Save
        </Button>
        <Button variant="outlined" onClick={() => setCurrentTab(2)}>
          Next
        </Button>
      </Box>
    </form>
        </Box>
      )}

      {currentTab === 2 && (
        <Box sx={{ mt: 3 }}>
        <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        {/* Transport Facility */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Transport Facility
          </Typography>
          <RadioGroup row name="transportFacility" defaultValue="No">
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </Grid>
        {/* Hostel Facility */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Hostel Facility
          </Typography>
          <RadioGroup row name="hostelFacility" defaultValue="No">
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </Grid>
        {/* Additional Notes */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Additional Notes"
            name="additionalNotes"
            variant="outlined"
            multiline
            rows={4}
          />
        </Grid>
      </Grid>
      <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>
    </form>
        </Box>
      )}
    </Box>

    

  );
};

export default AdmissionForm;