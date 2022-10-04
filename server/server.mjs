import express from "express";
import cors from "cors";
import "dotenv/config";
// import mongoose from "mongoose";
// import { getCars, postCars } from "./routes/cars.mjs";
import { carsrouter } from "./routes/cars.routes.mjs";

const port = 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', carsrouter)

// const uri = process.env.EXPRESS_NODE_ATLAS_URI;
// mongoose.connect(uri);

// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("mongoDB connection established successfully");
// });

// app.get("/cars", getCars);

// app.post("/cars", postCars);

app.listen(port, () => {
  console.log(`Server is working on localhost:${port}`);
});
