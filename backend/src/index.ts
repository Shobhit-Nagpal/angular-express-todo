import express from "express";
import { appRouter } from "./modules/routes";

const PORT = 3000;

const app = express();

app.use('/api', appRouter)

app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`)
})
