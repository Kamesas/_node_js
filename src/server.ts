import express, { Request, Response } from "express";
import timeRouter from "./time/route";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.use("/api", timeRouter);

export default app;
