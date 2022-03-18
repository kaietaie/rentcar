import express from "express";
import addCars from "./mongo.mjs";
import "dotenv/config";
import mongoose from "mongoose";
import carSchema from "./carSchema.mjs";

const uri = process.env.EXPRESS_NODE_ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("mongoDB connection established successfully");
});

const port = 5000;
const app = express();



app.get("/car", (req, res) => {
    carSchema
        .find()
        .select({_id: 0, __v: 0})
        .then( e => res.json(e))    
        .catch(err => res.status(400).json("Error" + err))
});

app.post("/car", (req, res) => {
  res.send(addCars());
});

app.listen(port, () => {
  console.log(`Server is working on localhost:${port}`);
});
