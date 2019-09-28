const strategems = require('./controllers/strategems');

module.exports = app => {
  app.get('/', (req, res) => {
    res.send('home');
  });

  app.get('/strats', strategems.getStrategems);
  app.post('/populate', strategems.populateStrategems);
};
