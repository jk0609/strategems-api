import mongoose from 'mongoose';

const strategemSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  source: {
    type: String,
    unique: true,
  },
  rulesText: {
    type: String,
    unique: true,
  },
  flavorText: {
    type: String,
    unique: true,
  },
  faction: {
    type: Number,
    unique: true,
  },
  cost: {
    type: Number,
    unique: true,
  },
});
  // mode: {
  //   type: Number,
  //   unique: true,
  // }

const Strategem = mongoose.model('Strategem', strategemSchema);

export default Strategem;