const express = require('express');
//const routerApi = require('./routes');
const app = express();
const routes = require('./src/routes');
const db = require("./src/models");

app.get('/', (req, res) => {
  res.json({ name: 'Hello World!' });
});

app.use(express.json());

// database


db.sequelize.sync({ alter: true }).then(() => {
  console.log("Drop and Resync Db");
});

// routes
app.use('/v1', routes);

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
