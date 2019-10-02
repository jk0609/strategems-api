const mongoose = require('mongoose');

const strategemSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  rulesText: {
    type: String,
    unique: true
  },
  flavorText: {
    type: String,
    unique: true
  },
  faction: {
    type: String,
    unique: true
  },
  cost: {
    type: [Number],
    unique: true
  },
  vigilus: {
    type: String,
    unique: true
  },
  subfaction: {
    type: String,
    unique: true
  }
});
// mode: {
//   type: Number,
//   unique: true,
// }

const Strategem = mongoose.model('Strategem', strategemSchema);

module.exports = Strategem;
