require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Route imports
const authRoutes = require("./routes/authRoutes/authRoutes");
const surveyRoutes = require("./routes/surveyRoutes/routes");
const psychologistRoutes = require("./routes/psychologistRoutes/routes");
const journalRoutes = require("./routes/journalRoutes/routes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Welcome route
app.get("/", (req, res) => {
  res.send("Welcome to Mental Health API!");
});

// API Routes
app.use("/api/auth", authRoutes); // Authentication endpoints
app.use("/api/survey", surveyRoutes); // Mental health survey
app.use("/api/psych", psychologistRoutes); // Psychologist finder
app.use("/api/journal", journalRoutes); // Journal analysis

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
