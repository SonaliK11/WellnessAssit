import React from "react";
import { Box, Typography, Button } from "@mui/material";
import HomeImage from "../assets/wellness.jpg"; 


const Home = () => {
  return (
    <Box textAlign="center" p={2}>
     
      <Typography variant="h5" fontWeight="bold" mt={2}>
       Welcome to WellnessAssist
      </Typography>
      <img
        src={HomeImage}
        style={{ maxWidth: "50%", height: "auto", borderRadius: "8px" }}
      />
      <Typography variant="body1" color="textSecondary" mt={1}>
        WellnessAssist is your one-stop solution for managing your health and wellness needs.
        Whether you need to book an appointment, cancel it, or set reminders, we've got you covered!
      </Typography>

      
      {/* Button */}
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "20px", padding: "10px 20px", borderRadius: "20px" }}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default Home;
