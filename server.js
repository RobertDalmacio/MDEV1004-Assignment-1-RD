/*
  File: server.js
  Student: Robert Dalmacio
  Student ID: 200606074
  Date: 2025-09-20

  Express static server for Pokédex app.
*/
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve all static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Explicit route for root URL to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server listening
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
