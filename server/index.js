const express = require('express');
const app = express();
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 3300;

// 1. gh-pages — index.html <script src='build/main.[hash].js />
// a. I can't set the static folder, so no absolute path in src='',
// Use a relative path to the folder and the file...
// b. Could add a '/public' (rel, no slash) folder <link src='public/main...' />

// 2. localhost — index.html <script src='/main.[hash].js' />
// a. I can set the static folder, so can do a short absolute path of a single '/'.
// In other words, don't use a '/build' folder in path b/c it's included in express.static
// c. Same with /public items

app.use(volleyball);
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
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
