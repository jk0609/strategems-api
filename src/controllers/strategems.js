// Strategem API methods
const Strategem = require('../models/strategems');

exports.getStrategems = async (req, res) => {
  try {
    var result = await Strategem.find().exec();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.populateStrategems = async (req, res) => {
  var strategemsConfig = require('../../strategemsConfig');
  try {
    await Strategem.deleteMany({});

    let result = await Strategem.collection.insertMany(strategemsConfig);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
