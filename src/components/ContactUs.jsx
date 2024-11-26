import React from "react";
import { Box, Typography, Link, Grid, Paper } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactUs = () => {
  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          maxWidth: "800px",
          margin: "20px auto",
          padding: "20px",
          backgroundColor: "#ffffff",
        }}
      >
        <Typography variant="h4" gutterBottom align="center">
          Contact Us
        </Typography>

        {/* Address Section */}
        <Grid container spacing={2} alignItems="center" sx={{ marginBottom: "20px" }}>
          <Grid item>
            <LocationOnIcon color="primary" />
          </Grid>
          <Grid item>
            <Typography variant="body1">
              Address: <strong>Pandit Ravi Shankar Shukla Nagar, Korba, Chhattisgarh (PT.R.S.S Nagar Korba)</strong>
            </Typography>
          </Grid>
        </Grid>

        {/* Phone Section */}
        <Grid container spacing={2} alignItems="center" sx={{ marginBottom: "20px" }}>
          <Grid item>
            <PhoneIcon color="primary" />
          </Grid>
          <Grid item>
            <Typography variant="body1">
              Phone: <Link href="tel:+919827483324" underline="hover">+91 9827483324</Link>
            </Typography>
          </Grid>
        </Grid>

        {/* Email Section */}
        <Grid container spacing={2} alignItems="center" sx={{ marginBottom: "20px" }}>
          <Grid item>
            <EmailIcon color="primary" />
          </Grid>
          <Grid item>
            <Typography variant="body1">
              Email: <Link href="mailto:newstarenglishschool@gmail.com" underline="hover">newstarenglishschool@gmail.com</Link>
            </Typography>
          </Grid>
        </Grid>

        {/* Google Map Embed */}
        <Box
          sx={{
            marginTop: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.63342437115318!2d82.726356!3d22.3485388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a278f5a87c4ab87%3A0x4fe81a5027b29fd5!2sNEW%20STAR%20ENGLISH%20SCHOOL!5e0!3m2!1sen!2sin!4v1732017287769!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Paper>
    </Box>
  );
};

export default ContactUs;
