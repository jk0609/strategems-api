import mongoose from 'mongoose';

const factionSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
});

const Faction = mongoose.model('Faction', factionSchema);

export default Faction;