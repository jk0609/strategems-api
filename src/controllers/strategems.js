// Strategem API methods
const Strategem = require('../models/strategem');
const Faction = require('../models/faction');

exports.getAllStrategems = async (req, res) => {
  try {
    var result = await Strategem.find().populate('faction');
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.populateStrategems = async (req, res) => {
  try {
    let strategemsConfig = require('../../strategemsConfig');
    let factions = await Faction.find();
    let factionIdMap = {};
    factions.forEach(faction => {
      factionIdMap[faction.shortName] = faction._id;
    });

    let strategemsWithFactions = [];
    strategemsConfig = strategemsConfig.map(faction => {
      const factionId = factionIdMap[faction.factionName];
      faction.strats.forEach(strat => {
        strategemsWithFactions.push({
          ...strat,
          faction: factionId
        });
      });
    });

    await Strategem.deleteMany({});
    let result = await Strategem.collection.insertMany(strategemsWithFactions);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
