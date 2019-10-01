const mongoose = require('mongoose');

const strategemSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  // source: {
  //   type: String,
  //   unique: true,
  // },
  rulesText: {
    type: String,
    unique: true
  },
  // flavorText: {
  //   type: String,
  //   unique: true,
  // },
  faction: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Faction'
  },
  cost: {
    type: Number,
    unique: true
  }
});
// mode: {
//   type: Number,
//   unique: true,
// }

const Strategem = mongoose.model('Strategem', strategemSchema);

module.exports = Strategem;
