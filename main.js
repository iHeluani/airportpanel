const express = require('express');
const bodyParser = require('body-parser');

// Create express app
const app = express();

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// Parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(process.env.MONGODB_URI || dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Connected to database!");    
}).catch(err => {
    console.log('Could not connect to the database...', err);
    process.exit();
});

// Welcome
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Airport Panel!"});
});

// Require Flights routes
require('./app/routes/panel.routes.js')(app);

// Listening port for requests
app.listen(process.env.PORT || 8080, () => {
    console.log("Server is listening on port 8080");
});