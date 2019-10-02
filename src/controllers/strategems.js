// Strategem API methods
const Strategem = require('../models/strategem');

exports.getFactionStrategems = async (req, res) => {
  try {
    let factions = req.query.factions.split(',');
    let result = await Strategem.find({ faction: { $in: factions } });
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.populateStrategems = async (req, res) => {
  try {
    let strategemsConfig = require('../../strategemsConfig');

    await Strategem.deleteMany({});
    let result = await Strategem.collection.insertMany(strategemsConfig);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
