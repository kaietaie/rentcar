import express from "express";
import cors from "cors";
import "dotenv/config";
import { carsrouter } from "./routes/cars.routes.mjs";
import os from 'os';

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 5000;
const app = express();
const hostname = os.hostname();

app.use(cors());
app.use(express.json());
app.use('/apicars', carsrouter)

app.listen(port, () => {
  console.log(`Server is working on ${host}:${port}`);
});
