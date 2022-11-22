import carSchema from "../carSchema.mjs";
import addCars from "../mongo.mjs";



export const getCars = (req, res) => {
  carSchema
    .find()
    .then((cars) => res.json(cars))
    .catch((err) => res.status(400).json("Error" + err));
};
export const postCars = (req, res) => {
    res.send(addCars());
  }