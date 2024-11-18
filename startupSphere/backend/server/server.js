const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const researchRoutes = require('./routes/researchRoutes');
const startupRoutes = require('./routes/startupRoutes');
const patentRoutes = require('./routes/patentRoutes');
const errorHandler = require('./middleware/errorMiddleware');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use('/api/research-projects', researchRoutes);
app.use('/api/startups', startupRoutes);
app.use('/api/patents', patentRoutes);

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));