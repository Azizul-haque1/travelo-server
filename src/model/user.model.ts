import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import { IUser } from "../types/user.interface";
import config from "../config";

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      select: false,
    },

    avatar: {
      type: String,
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// hash password
userSchema.pre("save", async function () {
  const user = this as any;

  if (!user.isModified("password")) return;

  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
