import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Tabs, Tab, Box, Button } from "@mui/material";
import Home from "./pages/Home";
import Consult from "./pages/Consult";
import Bot from "./pages/Bot";
import Book from "./pages/Book";
import Cancel from "./pages/Cancel";
import Remind from "./pages/Remind";

const App = () => {
  const [value, setValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Router>
      <div style={{ fontFamily: "Arial, sans-serif" }}>
        {/* Navigation Bar */}
        <AppBar position="static" color="default" elevation={0}>
          <Toolbar>
            <Typography variant="h6" color="green" style={{ flexGrow: 1, fontWeight: "bold", textAlign:"center" }}>
              WellnessAssist
            </Typography>
          </Toolbar>
          <Tabs value={value} onChange={handleTabChange} centered>
            <Tab label="Home" component={Link} to="/home" />
            <Tab label="Chat with WellnessAsist" component={Link} to="/chatBot" />
            <Tab label="Consult" component={Link} to="/consult" />
            <Tab label="Book" component={Link} to="/book" />
            <Tab label="Cancel" component={Link} to="/cancel" />
            <Tab label="Reminders" component={Link} to="/remind" />
          </Tabs>
        </AppBar>

        {/* Routes */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/consult" element={<Consult />} />
          <Route path="/chatBot" element={<Bot/>} />
          <Route path="/book" element={<Book />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/remind" element={<Remind />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
