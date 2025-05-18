const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const tasksRouter = require('./routes/tasks');
const app = express();

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(bodyParser.json());
app.use('/tasks', tasksRouter);

app.listen(3000, () => console.log('API escuchando en http://localhost:3000'));
