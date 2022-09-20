const express = require('express');

const notesRouter = require('./notes');
// const apiRouter = require('./api');
const htmlRouter = require('./html')

const app = express();

app.use('/notes', notesRouter);
// app.use('/api', apiRouter);
app.use('/html', htmlRouter);

module.exports = app;