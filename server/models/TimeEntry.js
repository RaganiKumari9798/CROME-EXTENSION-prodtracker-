// models/TimeEntry.js
import mongoose from 'mongoose';

const timeEntrySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: String, required: true },   // e.g., "2025-07-05"
  url: { type: String, required: true },
  millis: { type: Number, default: 0 }
});

export default mongoose.model('TimeEntry', timeEntrySchema);