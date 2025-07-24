import express, { Request, Response } from "express";

let app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!!!");
});

export default app;
