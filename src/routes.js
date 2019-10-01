const strategems = require('./controllers/strategems');
const factions = require('./controllers/factions');

module.exports = app => {
  app.get('/', (req, res) => {
    res.send('home');
  });

  app.get('/strats', strategems.getAllStrategems);
  app.post('/strats/populate', strategems.populateStrategems);

  app.get('/factions', factions.getAllFactions);
  app.post('/factions/populate', factions.populateFactions);
};
