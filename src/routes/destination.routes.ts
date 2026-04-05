// routes/destination.route.ts

import express from "express";
import { destinationControllers } from "../controller/destination.controller";

const router = express.Router();

router.post("/", destinationControllers.createDestination);
router.post("/more", destinationControllers.createManyDestination);

router.get("/", destinationControllers.getAllDestinations);

router.get("/:id", destinationControllers.getSingleDestination);

router.patch("/:id", destinationControllers.updateDestination);

router.delete("/:id", destinationControllers.deleteDestination);

export const DestinationRoutes = router;
