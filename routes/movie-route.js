const router = require('express').Router();
let Movie = require('../models/movie-model');

// Get all movies
router.route('/').get((req, res) => {
    Movie.find() 
        .then(movies => res.json(movies))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Add movie
router.route('/add').post((req, res) => { 
    const movie = req.body.movie;
    const category = req.body.category;
    const description = req.body.description;
    const status = req.body.status;
    const rating = Number(req.body.rating);

    const newMovie = new Movie({
        movie,
        category,
        description,
        status,
        rating
    });

    newMovie.save()
        .then(() => res.json('Movie added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get specific movie by id
router.route('/:id').get((req, res) => {
    Movie.findById(req.params.id) // findById is a function by Mongoose
        .then(movie => res.json(movie))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Delete specific movie by id
router.route('/:id').delete((req, res) => {
    Movie.findByIdAndDelete(req.params.id)
        .then(() => res.json('Movie deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update specific movie by id
router.route('/:id').put((req, res) => {
    Movie.findById(req.params.id)
        .then(movie => {
            movie.movie = req.body.movie;
            movie.category = req.body.category;
            movie.description = req.body.description;
            movie.status = req.body.status;
            movie.rating = Number(req.body.rating);

            movie.save()
                .then(() => res.json('Movie updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;