const express = require('express');
//const routerApi = require('./routes');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// routes
//routerApi(app);.

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
