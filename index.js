// index.js
require('dotenv').config();

const express = require("express");
const cors = require("cors");
const connectDB = require('./config/database');

const apiModule = require('./api');

const app = express();
const port = process.env.PORT || 8000;

connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// api main route
app.use('/api', apiModule)

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
