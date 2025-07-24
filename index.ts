import express, { Request, Response } from "express";
import os from "os";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!!!");
});

app.listen(port, "0.0.0.0", () => {
  const networkInterfaces = os.networkInterfaces();
  let localIp: string | undefined;

  Object.keys(networkInterfaces).forEach((ifaceName) => {
    const iface = networkInterfaces[ifaceName];
    if (iface) {
      for (const alias of iface) {
        if (alias.family === "IPv4" && !alias.internal) {
          localIp = alias.address;
          return;
        }
      }
    }
  });

  console.log(`  > Local:    http://localhost:${port}/`);
  if(localIp) {
    console.log(`  > Network:  http://${localIp}:${port}/`);
  }
});
