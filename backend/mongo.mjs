import mongoose from "mongoose";
import url from "../link";

const mongooseConection = function () {
  const uri = url;
  mongoose.connect(uri.uri);
  const connection = mongoose.connection;

  connection.once("open", () => {
    console.log("mongoDB connection established successfully");
  });

  
};

export default mongooseConection;
