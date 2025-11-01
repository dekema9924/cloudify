import mongoose, { Schema, models } from "mongoose";

const UserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    profileImage: { type: String, default: "" },

    storageUsed: { type: Number, default: 0 },  // bytes
    storageLimit: { type: Number, default: 5 * 1024 * 1024 * 1024 }, // 5GB

    fileCount: { type: Number, default: 0 },

    plan: {
      type: String,
      enum: ["free", "pro", "enterprise"],
      default: "free",
    },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", UserSchema);
export default User;

