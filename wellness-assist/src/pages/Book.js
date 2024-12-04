import React from "react";
import { Box, Typography } from "@mui/material";
import BookAppointmentImage from "../assets/bookappointment.png"; 

const Book = () => {
  return (
    <Box textAlign="center" p={2}>
             {/* Image */}
      <img
        src={BookAppointmentImage}
        alt="Appointment"
        style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
      />
      <Typography variant="h5" fontWeight="bold" mt={2}>
        Book Appointments
      </Typography>
      <Typography variant="body1" color="textSecondary" mt={1}>
        Easily schedule appointments with our expert healthcare providers at your convenience.
      </Typography>
    </Box>
  );
};

export default Book;
