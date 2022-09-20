const express = require('express');
const apiRouter = require('./api');
const notesRouter = require('./notes');

const app = express();

app.use('/api', apiRouter);
app.use('/notes', notesRouter);

module.exports = app;