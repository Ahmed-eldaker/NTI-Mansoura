const mongoose = require("mongoose");
const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/ToDoList")
    .then(() => {
      console.log("connected to DB");
    })
    .catch(() => {
      console.log("cant connect to DB");
    });
};
module.exports = connectDB;
