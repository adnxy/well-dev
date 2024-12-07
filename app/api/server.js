// server.js
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS for all routes

app.get('/api/fixtures', async (req, res) => {
  const { startDate, endDate } = req.query;
  const response = await fetch(`https://api.sportmonks.com/v3/football/fixtures/between/${startDate}/${endDate}?page=1`, {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY'
    }
  });
  const data = await response.json();
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});