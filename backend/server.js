const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Secret key for JWT
const SECRET_KEY = 'Squid game';

// Route 1: /api/login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (username === "yukta" && password === "yukta") {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '3m' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Middleware to verify JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Route 2: /api/summary-data
app.get('/api/summary-data', authenticateToken, (req, res) => {
  const summaryData = [
    {
      "id" : 1,
      "month" : "January",
      "energyProduced" : 200
    },
    {
      "id" : 2,
      "month" : "Feburary",
      "energyProduced" : 240
    },
    {
      "id" : 3,
      "month" : "March",
      "energyProduced" : 300
    },
    {
      "id" : 4,
      "month" : "April",
      "energyProduced" : 350
    },
    {
      "id" : 5,
      "month" : "May",
      "energyProduced" : 400
    }
  ];
  return res.json(summaryData)
});

// Route 3: /api/reports-data
app.get('/api/reports-data', authenticateToken, (req, res) => {
  const reportsData = [
    {
      "id" : 1,
      "month" : "January",
      "costReduction" : 5
    },
    {
      "id" : 2,
      "month" : "Feburary",
      "costReduction" : 8
    },
    {
      "id" : 3,
      "month" : "March",
      "costReduction" : 12
    },
    {
      "id" : 4,
      "month" : "April",
      "costReduction" : 15
    },
    {
      "id" : 5,
      "month" : "May",
      "costReduction" : 18
    }
  ];
  return res.json(reportsData);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend server is running at http://localhost:${PORT}`);
});
