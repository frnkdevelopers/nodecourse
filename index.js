const express = require('express');
//const routerApi = require('./routes');
const app = express();
const routes = require("./src/routes");

app.get('/', (req, res) => {
  res.json({name:'Hello World!'});
});

// routes
app.use("/v1", routes);

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

