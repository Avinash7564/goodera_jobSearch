const mongoose = require("mongoose");
const jobSchema = mongoose.Schema({
  desription: { type: String, require: true },
  image: { type: String, require: true },
  location: { type: String, require: true },
  title: { type: String, require: true },
  company: { type: String, require: true },
});

const Job = mongoose.model("job", jobSchema);
module.exports = Job;
