const express = require('express');
const logger = require('morgan');
const path = require('path');
const routes = require('./routes');
require('./config/db');

const app = express();

//port for our serveris local except when deployed on heroku
const PORT = process.env.PORT || 5000;

//parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));
app.use(routes);


app.use(express.static('client/build'));

//Show the react app no matter what url route is used
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,"../client/build/index.html"));
});

app.listen(PORT, () => {
    console.log('App is Currently running on PORT: ', PORT);
});