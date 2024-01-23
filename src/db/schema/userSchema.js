import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
});

const UserPool = mongoose.models.user || mongoose.model('user', userSchema);

export { UserPool };
