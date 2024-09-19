const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const healthRecordsRoutes = require('./routes/healthRecordsRoutes');
const cors = require('cors');
const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors());
// Routes
app.use('/api/health-records', healthRecordsRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
