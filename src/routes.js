const strategems = require('./controllers/strategems');

module.exports = app => {
  app.get('/', (req, res) => {
    console.log('home')
  });

  app.get('/strats', strategems.getStrategems);
}