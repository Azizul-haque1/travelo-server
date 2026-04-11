// routes/destination.route.ts

import express from "express";
import { destinationControllers } from "../controller/destination.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { isAdmin } from "../middleware/admin.middleware";

const router = express.Router();

router.post(
  "/create",
  authMiddleware,
  isAdmin,
  destinationControllers.createDestination
);
router.post("/more", destinationControllers.createManyDestination);

router.get("/", destinationControllers.getAllDestinations);

router.get("/featured", destinationControllers.getFeaturedDestinations);

router.get("/:id", destinationControllers.getSingleDestination);

router.patch("/:id", destinationControllers.updateDestination);

router.delete("/:id", destinationControllers.deleteDestination);

export const DestinationRoutes = router;
