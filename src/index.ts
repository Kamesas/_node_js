import os from "os";
import app from "./server";

const PORT = 3000;

app
  .listen(PORT, "0.0.0.0", () => {
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

    console.log(`  > Local:    http://localhost:${PORT}/`);
    if (localIp) {
      console.log(`  > Network:  http://${localIp}:${PORT}/`);
    }
  })
  .on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      console.log(`Port ${PORT} is already in use`);
      process.exit(1);
    }
  });
