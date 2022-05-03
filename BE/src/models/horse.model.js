const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, required: true, trim: true },
  color: {
    type: String,
  },
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('todo', schema);
