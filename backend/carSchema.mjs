import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  name: String,
  properties: {
    isavailable: Boolean,
    popular: Boolean,
    class: [String],
    engine: String,
    transmission: String,
    fuel: String,
    consumption: Number,
    pasangers: Number,
    trunk: Number,
    options: {
      clima: Boolean,
      cruiseControle: Boolean,
    },
  },
});

export default mongoose.model("Cars", carSchema);
