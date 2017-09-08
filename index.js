const express = require('express');
const debug = require('debug')('main-index');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/views')));
app.use(express.static(path.join(__dirname, '/public')));

const server = app.listen(8000, () => {
  debug('Listening on port 8000');
});

app.get('/', (req, res) => {
  res.sendFile('index.html');
});