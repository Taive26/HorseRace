const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  place: { type: String, required: true, trim: true },
  date: { type: Date, required: true },
  participants: [
    {
      horseID: {
        type: Schema.Types.ObjectId,
        ref: "horses",
      },
    },
  ],
});

schema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("race", schema);
