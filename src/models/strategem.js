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
    type: String
  },
  faction: {
    type: String
  },
  cost: {
    type: [Number],
    unique: true
  }
});
// mode: {
//   type: Number,
//   unique: true,
// }

const Strategem = mongoose.model('Strategem', strategemSchema);

module.exports = Strategem;
