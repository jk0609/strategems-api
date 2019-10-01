const mongoose = require('mongoose');

const factionSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  shortName: {
    type: String,
    unique: true
  }
});

const Faction = mongoose.model('Faction', factionSchema);

module.exports = Faction;
