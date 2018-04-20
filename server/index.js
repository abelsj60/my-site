const express = require('express');
const app = express();
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 3300;

app.use(volleyball);
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', require('./api'));

app.get('/bundle.js', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../bundle.js'));
});

app.get('/bundle.js.map', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../bundle.js.map'));
});

app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.listen(PORT, function () {
  console.log("Heyo");
  console.log("Dayo?");
  console.log(`No! Heyo! We're running on port ${PORT}`);
});

module.exports = app;
