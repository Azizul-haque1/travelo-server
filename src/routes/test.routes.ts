// routes/test.routes.ts
import express from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { isAdmin } from "../middleware/admin.middleware";

const router = express.Router();

router.get("/test", authMiddleware, (req, res) => {
  res.json({ success: true, message: "test ok for login user!" });
});

export const testRoute = router;
