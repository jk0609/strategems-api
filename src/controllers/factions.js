// Faction API methods
const Faction = require('../models/faction');

exports.getAllFactions = async (req, res) => {
  try {
    let result = await Faction.find().exec();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.populateFactions = async (req, res) => {
  try {
    let factionsConfig = require('../../factionsConfig');
    await Faction.deleteMany({});

    let result = await Faction.collection.insertMany(factionsConfig);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
