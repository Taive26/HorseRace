const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  result: [
    {
      race: {
        raceID: {
          type: Schema.Types.ObjectId,
          ref: "races",
        },
      },
      winner: {
        horseID: {
          type: Schema.Types.ObjectId,
          ref: "horses",
        },
      },
    },
  ],
});

schema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("result", schema);
