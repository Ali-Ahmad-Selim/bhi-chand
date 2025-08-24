// src/Model/Schema.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
  },
  {
    timestamps: true,
    // optional: remove `collection` and let mongoose pluralize "User" -> "users"
    // collection: "users",
  }
);

// ✅ Names must match: "User" <-> models.User
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
