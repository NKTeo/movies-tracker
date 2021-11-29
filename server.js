const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // Help us connect to MongoDB
require('dotenv').config();
const path = require('path');

const app = express(); // Uses express framework to create an app object
const port = process.env.PORT || 5000; // Stating that backend will run on port 5000

app.use(cors());
app.use(express.json());

// Connection to DB
const uri = process.env.ATLAS_URI; // Retrieve URI from DB
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => { // Log in console once the connection is successful
    console.log("MongoDB database connection established successfully");
})

// Routing
const moviesRouter = require('./routes/movie-route');
app.use('/movie', moviesRouter); // URL that has /movie, route to movieRouter

// Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    // Set static folder
    app.use(express.static('client/build'));
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
    })
};

// Listening
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});