import express from "express";
import cors from "cors";
import "dotenv/config";
import { carsrouter } from "./routes/cars.routes.mjs";

const port = 5000;
const app = express();
const hostname = os.hostname();

app.use(cors());
app.use(express.json());
app.use('/apicars', carsrouter)

app.listen(port, hostname, () => {
  console.log(`Server is working on ${hostname}:${port}`);
});
