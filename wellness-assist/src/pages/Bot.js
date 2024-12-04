import React from "react";
import { Box, Typography } from "@mui/material";
import BotImage from "../assets/bot.jpg"; 

const Bot = () => {
  return (
    <Box textAlign="center" p={2}>
             {/* Image */}
      <img
        src={BotImage}
        style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
      />
      <Typography variant="h5" fontWeight="bold" mt={2}>
        Chat with our assist
      </Typography>
      <Typography variant="body1" color="textSecondary" mt={1}>
        Chat with our assistance and get your diagnostics. You can get recommended doctors near you.
      </Typography>
    </Box>
  );
};

export default Bot;
