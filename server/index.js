const express = require('express');
const app = express();
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 3300;

// 1. gh-pages — index.html script, must point at build/main.[hash].js (rel, no slash) b/c I don't control web server.
// -Can add a public (rel, no slash) folder to github pages if I want, as long as I add the path segment to the link urls 
// 2. localhost — index.html script, must point at /main.[hash].js b/c I do control it

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
