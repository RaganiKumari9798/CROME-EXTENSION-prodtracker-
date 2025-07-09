import express from 'express';
import auth from '../middleware/auth.js';
import { upsertTimes } from '../controllers/timeController.js';

const router = express.Router();
router.post('/', auth, upsertTimes); // Receives daily timeData from extension
export default router;