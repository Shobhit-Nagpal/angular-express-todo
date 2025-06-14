import express from "express";
import { appRouter } from "./modules/routes";
import db from "./modules/db";

const PORT = 3000;

const app = express();

process.on("SIGINT", () => gracefulShutdown("SIGINT"));
process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));

app.use(express.json());

app.use("/api", appRouter);

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

async function gracefulShutdown(signal: string) {
  console.log(`Received ${signal}. Shutting down backend...`);

  console.log("Shutting down backend");
  server.close(() => {
    console.log("Backend shutdown! Logging off.");
  });

  console.log("Closing connection to database");
  await db.close();
  console.log("Database connection closed!");

  process.exit(0)
}
