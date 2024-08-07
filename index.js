import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import db from './conFig/db.js';
import indianCuisine from './routes/indianCusine.js';

dotenv.config();

const app = express();

// Database connection
db();

// PORT
const PORT = process.env.PORT || 5000; // Default to 5000 if PORT is not defined

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from your frontend
  }));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api/category', indianCuisine); // Corrected the endpoint path

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
