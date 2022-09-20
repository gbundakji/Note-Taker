const htmlRouter = require('express').Router();
const path = require('path');
const { readFromFile } = require('../helpers/fsUtils');

htmlRouter.get('/', (req, res) => {
    readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)))
});

htmlRouter.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

htmlRouter.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = htmlRouter;