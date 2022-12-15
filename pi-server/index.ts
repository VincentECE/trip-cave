const express = require('express');
const path = require('path');
const { userRoutes } = require('./routes');
const { crossOrigin } = require('./middleware');
const app = express();
require('./db');

// app.use(express.static(path.resolve(__dirname, '../../client/build')));
app.use(crossOrigin); // uncomment this line if running the client and server separately
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', userRoutes);

let port = 3001;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});