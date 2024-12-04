import React from "react";
import { Box, Typography } from "@mui/material";

const Cancel = () => {
  return (
    <Box textAlign="center" p={2}>
      <Typography variant="h5" fontWeight="bold" mt={2}>
      Cancel Appointments
      </Typography>
      <Typography variant="body1" color="textSecondary" mt={1}>
        Cancel your appointment and you can reschedule it.
      </Typography>
    </Box>
  );
};

export default Cancel;
