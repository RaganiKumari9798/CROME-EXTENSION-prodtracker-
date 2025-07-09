import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
  userId:      { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date:        { type: String, required: true },    // Format: "YYYY-MM-DD"
  totalMillis: { type: Number, default: 0 }
});

// Add a virtual to convert millis to hours if needed
reportSchema.virtual('hours').get(function() {
  return this.totalMillis / 3_600_000;
});

export default mongoose.model('Report', reportSchema);