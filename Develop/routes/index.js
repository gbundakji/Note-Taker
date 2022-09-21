const express = require('express');

const notesRouter = require('./notes');

const htmlRouter = require('./html')

const app = express();

app.use('/notes', notesRouter);

app.use('/html', htmlRouter);

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});
  
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

module.exports = app;