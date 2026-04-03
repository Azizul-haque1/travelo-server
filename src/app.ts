import cors from "cors";
import express, { Application, Request, Response } from "express";
import { UserRoutes } from "./routes/user.routes";

const app: Application = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("travelo server is running");
});

app.use("/api/users", UserRoutes);

app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;
