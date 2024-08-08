import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import db from './conFig/db.js';
import indianCuisine from './routes/indianCusine.js';
import latestRecipe from './routes/latestRecipe.js';

dotenv.config();

const app = express();

// Database connection
db();

// PORT
const PORT = process.env.PORT || 5000; 

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: 'http://localhost:3000', 
  }));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api/category', indianCuisine); 
app.use('/api/latest',latestRecipe)
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
