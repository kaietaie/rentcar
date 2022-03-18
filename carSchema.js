const carSchema = new mongoose.Schema({
    name: String,
    isavailable: Boolean,
    popular: Boolean,
    class: String,
    engine: String,
    transmission: String,
    fuel: String,
    consumption: Number,
    pasangers: Number,
    options: {
      clima: Boolean,
      cruiseControle: Boolean,
    },
  });

