const { Console } = require('console');
const fs = require('fs');

function note(app) {
    app.get('./api/notes', function (req, res) {
        fs.readFile('./db/db.json', function (err, data) {
            if (err) throw err;
            dbData = JSON.parse(data);
            res.send(dbData);
        });
    });


    app.post('/api/notes', function (req, res) {
        const userNotes = req.body;

        fs.readFile('./db/db.json', function (err, data) {
            if (err) throw err;
            console.log(err);
            dbData = JSON.parse(data);
            dbData.push(userNotes);
            let number = 1;
            dbData.forEach ((note, index) => {
                note.id = number; number++;
                return (dbData);

            });
            console.log(dbData);

            stringData = JSON.stringify(dbData);

            fs.writeFile('./db/db.json', stringData, (err, data) => {
                if (err) throw err;
            });
        });
        res.send('Your new note has been created!');
