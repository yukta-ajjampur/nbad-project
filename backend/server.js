const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const mysql = require('mysql') 

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Secret key for JWT
const SECRET_KEY = 'Squid game';

// Hardcoded login credentials
const USERNAME = 'yukta';   
const PASSWORD = 'yukta';   

// ✅ MySQL Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',      
  password: 'yukta123',  
  database: 'clean_energy',
  port: 3307
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err); 
    return;
  }
  console.log('✅ Connected to MySQL database');
});

// Route 1: /api/login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (username === USERNAME && password === PASSWORD) {
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
  const query = 'SELECT month, energyProduced FROM summary_data';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching summary data:', err.message);
      return res.status(500).send('Database error');
    }
    res.json(results);
  });
});

// Route 3: /api/reports-data
app.get('/api/reports-data', authenticateToken, (req, res) => {
  const query = 'SELECT month, costReduction FROM reports_data';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching reports data:', err.message);
      return res.status(500).send('Database error');
    }
    res.json(results);
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend server is running at http://localhost:${PORT}`);
});
