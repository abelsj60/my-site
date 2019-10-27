const express = require('express');
const app = express();
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 3300;

app.use(volleyball);
app.use(express.static(path.join(__dirname, '../docs/public')));
app.use(express.static(path.join(__dirname, '../docs/assets/images')));
app.use(express.static(path.join(__dirname, '../docs/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../docs/index.html'));
});

app.use((err, req, res, next) => {
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
