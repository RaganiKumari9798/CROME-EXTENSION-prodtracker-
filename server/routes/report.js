import express from 'express';
import auth from '../middleware/auth.js';
import Report from '../models/Report.js';

const router = express.Router();

// Get today's summary report
//router.get('/today', auth, async (req, res) => {
  router.get('/today', async (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  //const report = await Report.findOne({ userId: req.user.id, date: today });
  const report = await Report.findOne({ date: today });
  if (!report) return res.status(404).json({ message: 'No report yet' });
  res.json(report);
});

export default router;