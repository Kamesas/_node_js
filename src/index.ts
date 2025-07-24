import app from "./server";
import hostListener from "./helpers/listener";

const PORT = 3000;

app
  .listen(PORT, "0.0.0.0", () => hostListener(PORT))
  .on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      console.log(`Port ${PORT} is already in use`);
      process.exit(1);
    }
  });
