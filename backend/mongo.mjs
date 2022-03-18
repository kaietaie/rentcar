import mongoose from "mongoose";

const mongooseConection = function () {
  const uri = 'mongodb+srv://kaieta:t13zh92wnb@cluster0.ylhhw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
  mongoose.connect(uri.uri);
  const connection = mongoose.connection;

  connection.once("open", () => {
    console.log("mongoDB connection established successfully");
  });

  
};

export default mongooseConection;
