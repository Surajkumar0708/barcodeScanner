import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  fullName: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
