const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json())
const db = require('./config/db.config.js');
  
/* // Crea la tabla si no existe
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
});*/

app.set('port', process.env.PORT || 3000);
app.use(cors({ origin: 'http://localhost:4200' }));
app.use('/saifu/accounts', require('./route/account.route'));

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
