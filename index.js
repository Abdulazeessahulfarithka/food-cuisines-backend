import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import db from './conFig/db.js';
import indianCuisine from './routes/indianCusine.js';
import latestRecipe from './routes/latestRecipe.js';
import ramdanIftar from './routes/ramdaniftar.js';
import lunchRecipe from './routes/lunchRecipe.js';
import dinnerRecipe from './routes/dinnerRecipe.js';
const allowedOrigins = ['http://localhost:3000', 'https://cuisinelist.netlify.app'];

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
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  }));

// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api/category', indianCuisine);
app.use('/api/latest', latestRecipe);
app.use('/api/ramdan', ramdanIftar); 
app.use('/api/lunch',lunchRecipe)
app.use('/api/dinner',dinnerRecipe)
// Start /server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
