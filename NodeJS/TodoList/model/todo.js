// const { string, required, boolean } = require("joi");
const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  status: { type: Boolean, required: true },
  created_at: { type: Date, default: Date.now },
});
