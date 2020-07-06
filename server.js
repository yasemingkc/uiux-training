const express = require('express');
const path = require('path');
const app = express();
const satData = require('./data.json')

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send(JSON.stringify({word: 'dsg-ping'}));
});

app.get('/pong', function (req, res) {
  return res.send(JSON.stringify({word: 'dsg-pong'}));
 });

app.get('/sat-scores', function (req, res) {
  return res.send(JSON.stringify(satData));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);