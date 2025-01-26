const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

// Define the schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  communicationMethod: { type: String },
  message: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
});

// Create the model
const Contact = mongoose.model("Contact", contactSchema);

// Define the API endpoint
router.post("/submit-contact", async (req, res) => {
  try {
    const { name, email, phone, communicationMethod, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    const newContact = new Contact({
      name,
      email,
      phone,
      communicationMethod,
      message,
    });

    await newContact.save();

    res.status(200).json({ message: "Contact data saved successfully." });
  } catch (error) {
    console.error("Error saving contact data:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

module.exports = router;
