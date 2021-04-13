// DEPENDENCIES
const express= require ('express');

// Creating an "express" server
const app = express ();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + 'public'));

// ROUTER
require('./routes/apiRoute')(app);
require('./routes/htmlRoute')(app);

// Listener "starts" our server
app.listen(PORT, () => {
    console.log(`Congrats! Your app is listening on: ${PORT}`);
});

