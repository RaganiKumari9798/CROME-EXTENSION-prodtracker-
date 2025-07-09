
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './middleware/auth.js';
import timeRoutes from './routes/time.js';
import reportRoutes from './routes/report.js';
import './jobs/dailyReport.js';

dotenv.config();         // Load environment variables
connectDB();             // Connect to MongoDB

const app = express();

// ✅ Enable CORS for all origins (development-safe)
app.use(cors({ origin: '*' }));  // Or use specific origin in production

// ✅ Parse JSON body
app.use(express.json());

// ✅ Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/time', timeRoutes);
app.use('/api/report', reportRoutes);

// ✅ Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`✅ Server running at http://localhost:${PORT}`)
);