import express from "express";
import { UserRoutes } from "./user.routes";
import { DestinationRoutes } from "./destination.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/destination",
    route: DestinationRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
