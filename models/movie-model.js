const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    movie: { type: String, required: true }, // Movie field and validation
    category: { type: String, required: true }, // Category field and validation
    description: { type: String, required: true },
    status: { type: String, required: true }, // Interested, Planned, Completed
    rating: { type: Number, required: true }, // Overall rating / Personal Rating
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;