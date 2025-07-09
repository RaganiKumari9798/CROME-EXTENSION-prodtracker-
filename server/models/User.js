import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },  // optional if you prefer email-only
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  date:     { type: Date, default: Date.now }
});

// Automatically hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Instance method to compare plaintext password
userSchema.methods.comparePassword = async function(plainText) {
  return bcrypt.compare(plainText, this.password);
};

export default mongoose.model('User', userSchema);