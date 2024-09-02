// index.js
require('dotenv').config();

const express = require("express");
const cors = require("cors");
const connectDB = require('./config/database');

const notificationRoutes = require('./routes/notifications');

const app = express();
const port = process.env.PORT || 8000;

connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Basic route for testing
app.get("/", (req, res) => {
  res.send("Notification System is running!");
});

app.use('/api/notifications', notificationRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
