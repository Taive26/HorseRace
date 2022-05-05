const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  place: { type: String, required: true, trim: true },
  date: { type: String, required: true },
  participants: [],
});

schema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("race", schema);
