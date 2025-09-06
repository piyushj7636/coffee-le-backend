import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  phone: { type: String, unique: true, required: true, match: /^\+[1-9]\d{1,14}$/ },
  phoneVerified: { type: Boolean, default: false },
  phoneOTP: { type: String },
  name: { type: String }
},
{ 
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

const userModel = mongoose.models.user || mongoose.model('User', userSchema);

export default userModel;