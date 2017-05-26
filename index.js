require('babel-register');

const server = require('express')();
const response = require('./render').default;

server.get('/', (req, res) => {
  res.send(response);
});

server.listen(3005);
