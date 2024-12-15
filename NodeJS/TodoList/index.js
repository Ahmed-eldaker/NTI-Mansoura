const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
app.use(express.json());
const connectDB = require("./data/dbConnection");
connectDB();
// const joi = require("joi");
// const schema = joi.object({
//   username: joi.string().min(3).max(18).required(),
//   password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
// });
const todo = require("./routes/todo");
const task = require("./routes/task");
app.use("/todo", todo);
app.use("/task", task);
// app.get("/login", (req, res) => {

// task.

//   //   const id = req.params.
//   // id
//   // http.post('',user)
//   const valid = schema.validate(req.query.age);
//   //   const username = req.body.username;
//   //   const password = req.body.password;
//   if (!valid.error) {
//     res.json(valid);
//   } else {
//     res.status(501).send("not authorized");
//   }
//   // res.write()
//   // res.end()
// });
// app.get("/task");
// app.get("/data");
// app.post();
app.listen(port, () => {
  console.log(`server run on port ${port}`);
});
