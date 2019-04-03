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

app.get('/bundle.js', (_req, res) => {
  res.sendFile(path.join(__dirname, '../bundle.js'));
});

app.get('/bundle.js.map', (_req, res) => {
  res.sendFile(path.join(__dirname, '../bundle.js.map'));
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use((err, _req, res) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.listen(PORT, () => {
  console.log('Heyo');
  console.log('Dayo?');
  console.log(`No! Heyo! We're running on port ${PORT}`);
});

module.exports = app;
