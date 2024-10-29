import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      match: [
        /^\S+@\S+\.\S+$/,
        'Please provide a valid email address',
      ],
    },
    otp: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.RoamioUser || mongoose.model('RoamioUser', userSchema);


export default User;
