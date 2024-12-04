import React from "react";
import { Box, Typography } from "@mui/material";
import ConsultationImage from "../assets/consultation.jpg"; 

const Consult = () => {
  return (
    <Box textAlign="center" p={2}>
      {/* Image */}
      <img
        src={ConsultationImage}
        alt="Consultation Room"
        style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
      />

      {/* Heading */}
      <Typography variant="h5" fontWeight="bold" mt={2}>
        Consult with doctor
      </Typography>

      {/* Description */}
      <Typography variant="body1" color="textSecondary" mt={1}>
        Consult with you doctor on chat mode, for video consultation book appointments.
      </Typography>

    </Box>
  );
};

export default Consult;
