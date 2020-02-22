import mongoose from "mongoose";
import config from "config";

mongoose.connect(config.get("database_URL"), {
  useNewUrlParser: true
});

// callback when connection to mongodb is open
mongoose.connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

module.exports = mongoose;
