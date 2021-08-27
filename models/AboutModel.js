const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true },
  description: { type: String, required: true },
  projectImage: { type: String, required: false },
});

module.exports = mongoose.model("About", projectSchema);
