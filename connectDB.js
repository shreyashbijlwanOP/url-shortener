const Mongoose = require("mongoose");

const connectDB = (dbName) => {
  Mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`)
    .then((con) => {
      console.log("Mongo DB is connected successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
