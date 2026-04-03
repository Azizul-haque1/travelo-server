import bcrypt from "bcrypt";
import { Request, Response } from "express";
import jwt, { Secret } from "jsonwebtoken";
import config from "../config";
import { User } from "../model/user.model";

// Register user
const register = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    // Check if user already exists
    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      return res.status(400).json({
        success: false,
        message: "User already exists!",
      });
    }

    const savedUser = await User.create(req.body);

    // Generate token
    const token = jwt.sign(
      { email: savedUser.email, role: savedUser.role },
      config.jwt_secret as Secret,
      { expiresIn: config.jwt_expires_in as any }
    );

    // Omit password from response
    const userResponse = savedUser.toObject();
    delete userResponse.password;

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: userResponse,
      token,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Failed to register user",
      error: err.message,
    });
  }
};

// Login user
const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Compare passwords
    const isPasswordMatch = await bcrypt.compare(
      password,
      user.password as string
    );
    if (!isPasswordMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Generate token
    const token = jwt.sign(
      { email: user.email, role: user.role },
      config.jwt_secret as Secret,
      { expiresIn: config.jwt_expires_in as any }
    );

    // Omit password from response
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: config.cookie_secure,
        sameSite: config.cookie_same_site,
        maxAge: config.cookie_max_age,
      })
      .status(200)
      .json({
        success: true,
        message: "Login successful!",
        data: {
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Failed to login",
      error: err.message,
    });
  }
};

// Get all users
const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: users,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch users",
      error: err.message,
    });
  }
};

const logout = async (req: Request, res: Response) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: config.cookie_secure,
      sameSite: config.cookie_same_site,
    });

    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Failed to logout",
      error: error.message,
    });
  }
};

export const userControllers = {
  register,
  login,
  getUsers,
  logout,
};
