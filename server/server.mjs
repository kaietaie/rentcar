import express from "express";
import cors from "cors";
import "dotenv/config";
import { carsRouter } from "./routes/cars.routes.mjs";
import { authRouter } from "./routes/auth.routes.mjs";


const host = process.env.HOST || "localhost";
const port = process.env.SERVER_PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/apicars', carsRouter)
app.use('/auth', authRouter)

app.listen(port, () => {
  console.log(`Server is working on ${host}:${port}`);
});
