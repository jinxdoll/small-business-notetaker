// Dependencies
const fs = require('fs');
var data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

module.exports = function (app) {
    app.get('./api/notes', function (req, res) {
        fs.readFile('./db/db.json', function (err, data) {
            if (err) throw err;
            dbData = JSON.parse(data);
            res.send(dbData);
        });
    });


    app.post('/api/notes', function (req, res) {
        const userNotes = req.body;

        fs.readFile("./db/db.json", "utf8", function (err, data) {
            if (err) throw err;
            console.log(err);
            dbData = JSON.parse(data);
            dbData.push(userNotes);
            let number = 1;
            dbData.forEach((note, index) => {
                note.id = number; number++;
                return (dbData);

            });
            console.log("line 28:" + dbData);

            stringData = JSON.stringify(dbData);
            console.log("line 32:" + stringData)

            fs.writeFile('./db/db.json', stringData, (err, data) => {
                if (err) throw err;
            });
        });
        res.send('Your new note has been created!');

        app.delete('./api/notes/:id', function (req, res) {
            const deleteNote = req.params.id;
            console.log(deleteNote);

            fs.readFile('./db/db.json', function (err, data) {
                if (err) throw err;

                dbData = JSON.parse(data);
                for (let i = 0; i < dbData.length; i++) {
                    if (dbData[i].id === Number(deleteNote)) {
                        dbData.splice([i], 1);
                    }
                }
                console.log(dbData);
                stringData = JSON.stringify(dbData);

                fs.writeFile('./db/db.json', stringData, (err, data) => {
                    if (err) throw err;
                });
            });
            res.status("You have an error message:", 204).send();
        });
    }
    );
};
