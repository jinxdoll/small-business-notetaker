// DEPENDENCIES
const expres= require ('express');

// Creating an "express" server
const app = require('app');
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// ROUTER
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Listener "starts" our server
app.listen(PORT, () => {
    console.log(`Congrats! Your app is lisening on: ${PORT}`)
});

