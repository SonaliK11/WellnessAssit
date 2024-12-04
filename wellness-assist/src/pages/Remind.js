import React from "react";
import { Box, Typography } from "@mui/material";
import ReminderImage from "../assets/reminders.jpg"; 

const Remind = () => {
  return (
    <Box textAlign="center" p={2}>
         {/* Image */}
      <img
        src={ReminderImage}
        alt="Reminders"
        style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
      />

      <Typography variant="h5" fontWeight="bold" mt={2}>
      Reminders
      </Typography>
      <Typography variant="body1" color="textSecondary" mt={1}>
        Reminders for medications, appointments and other reminders.
      </Typography>
    </Box>
  );
};

export default Remind;
