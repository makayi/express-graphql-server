import mongoose from "mongoose";

const URL = "mongodb://localhost:27017/ebuy";

mongoose.connect(URL, {
  useNewUrlParser: true
});

// callback when connection to mongodb is open
mongoose.connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

module.exports = mongoose;
