const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");  // Ensure dotenv is imported
const cors = require("cors");
const contactRoutes = require("./controllers/contactRoutes.js");

dotenv.config(); // Load environment variables from .env

const app = express();
const PORT = process.env.PORT || 5000; // Use PORT from .env or fallback to 5000

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {  // Correct use of MONGODB_URI from .env
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// Root route for browser response
app.get("/", (req, res) => {
  res.send("<h1>Server is running successfully!</h1>");
});

// Routes
app.use("/api", contactRoutes);

// Server
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
