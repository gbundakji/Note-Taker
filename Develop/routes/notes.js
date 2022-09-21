const notesRouter = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile, writeToFile } = require('../helpers/fsUtils');

notesRouter.get('/', (req, res) => {
    readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});

notesRouter.get('/:note_id', (req, res) => {
    const noteId= req.params.note_id;
    readFromFile('./db/notes.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            const result = json.filter((note) => note.note_id === noteId);
            return result.length > 0
            ? res.json(result)
            : res.json('No note with that ID');
        });
});

notesRouter.delete('/:note_id', (req, res) => {
    const noteId = req.params.note_id;
    readFromFile('./db/notes.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            const result = json.filter((note) => note.note_id !== noteId);
            writeToFile('./db/notes.json', result);
            res.json(`Note ${noteId} has been deleted 🗑️`);
        });
});

notesRouter.post('/', (req, res) => {
    console.log(req.body);

    const { title, note } = req.body;

    if (req.body) {
        const newNote = {
            title,
            note,
            note_id : uuidv4(),
        };

        readAndAppend(newNote, './db/notes.json');
        res.json(`Note added successfully 🚀`);
    } else {
        res.errored('Error in adding note');
    }
});

module.exports = notesRouter;