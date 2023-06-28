const express = require('express');

function createServer() {
  const app = express();

  app.get('/', (req, res) => {
    res.send('<p> Mr Pain Bot Always Make Me Happy </p>');
  });
  app.head('/', (req, res) => {
    res.send('<p> Mr Pain Bot Always Make Me Happy </p>');
  });
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}

module.exports = createServer