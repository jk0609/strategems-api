// Strategem API methods

exports.getStrategems = async (req, res) => {
  try {
    var result = await Strategem.find().exec();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};