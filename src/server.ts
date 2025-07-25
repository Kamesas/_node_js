import express, { Request, Response } from "express";
import timeRouter from "./time/route";
import mysql from "mysql2/promise";

const app = express();

// Database connection configuration
const dbConfig = {
  host: "localhost",
  user: "alex",
  password: "1955",
  database: "Lab",
};

app.get("/", async (req: Request, res: Response) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    await connection.ping(); // Check if the connection is successful
    res.send("✅ Database connection successful!");
    connection.end();
  } catch (error) {
    console.error("Database connection failed:", error);
    res.status(500).send("❌ Database connection failed!");
  }
});

app.use("/api", timeRouter);

export default app;
