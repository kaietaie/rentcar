import express from "express";
import cors from "cors";
import addCars from "./mongo.mjs";
import "dotenv/config";
import mongoose from "mongoose";
import carSchema from "./carSchema.mjs";

const port = 5000;
const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.EXPRESS_NODE_ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongoDB connection established successfully");
});

app.get("/car", (req, res) => {
  carSchema
    .find()
    .then((cars) => res.json(cars))
    .catch((err) => res.status(400).json("Error" + err));
});

app.post("/car", (req, res) => {
  res.send(addCars());
});

app.listen(port, () => {
  console.log(`Server is working on localhost:${port}`);
});
