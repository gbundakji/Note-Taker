const nt = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

nt.get('/', (req, res) =>
    readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)))
);

nt.post('/', (req, res) => {
    const saved = notes;

    if (notes) {
        const newNotes = {
            notes,
            notes_id: uuidv4(),
        };
        readAndAppend(newNotes, './db/notes.json');

        const response = {
            status: 'Sucess',
            body: newNotes,
        };
        
        res.json(response);
    } else {
        res.json('Error in posting note')
    }
});

// router.delete('/notes/:id', (req, res) => {
//     deleteNote(notes, req.params.id);
//     res.json(notes);
// });


module.exports = nt;