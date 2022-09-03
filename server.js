const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});
const controllers = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(controllers);

app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
  });