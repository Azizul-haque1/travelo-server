import express from "express";
import { userControllers } from "../controller/user.controller";

const router = express.Router();
// user register
router.post("/register", userControllers.register);

// user login
router.post("/login", userControllers.login);

// get users
router.get("/", userControllers.getUsers);

export const UserRoutes = router;
