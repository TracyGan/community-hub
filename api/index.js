// index.js
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();  // Load environment variables from .env

const app = express();
const port = process.env.PORT || 5001;

// Middleware to parse incoming JSON data
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, Node.js!');
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});