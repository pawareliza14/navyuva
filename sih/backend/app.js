require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const researchInstituteRoutes = require("./routes/instituteProfile");
const projectProfileRoutes = require("./routes/projectProfile.js"); // Added project profile routes
const cors = require("cors");
const morgan = require("morgan"); // For request logging
const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*', // Allow all origins (adjust for production)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(morgan("dev")); // Log requests for better debugging

// Base route for API health check
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is running successfully.",
  });
});

// Routes
app.use("/api/research-institutes", researchInstituteRoutes);
app.use("/api/project-profiles", projectProfileRoutes); // New route added for project profiles

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack for debugging
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
