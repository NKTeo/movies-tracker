import React, { Component } from 'react';
import axios from 'axios';

export default class CreateMovie extends Component {
    constructor(props) {
        super(props); // sub-class have to pass the props to the super-class

        this.onChangeMovie = this.onChangeMovie.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onChangeRating = this.onChangeRating.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            movie: '',
            category: '',
            description: '',
            status: '',
            rating: ''
        }
    }

    // Change value when user keys in value
    onChangeMovie(e) {
        this.setState({
            movie: e.target.value
        })
    }

    onChangeCategory(e) {
        this.setState({
            category: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onChangeStatus(e) {
        this.setState({
            status: e.target.value
        })
    }

    onChangeRating(e) {
        this.setState({
            rating: e.target.value
        })
    }

    // On submission
    onSubmit(e) {
        e.preventDefault();

        const movie = {
            movie: this.state.movie,
            category: this.state.category,
            description: this.state.description,
            status: this.state.status,
            rating: this.state.rating
        }

        console.log(movie);

        axios.post('https://movie-tracker-nk.herokuapp.com/movie/add', movie) 
            .then(res => console.log(res.data));

        window.location = '/';
    }

    // Generate UI
    render() {
        return (
            <div className="container">
                <h3>Add Movie!</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Movie: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.movie}
                            onChange={this.onChangeMovie}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.category}
                            onChange={this.onChangeCategory}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Status: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.status}
                            onChange={this.onChangeStatus}
                        />
                    </div>
                    <div className="form-group">
                        <label>Rating: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.rating}
                            onChange={this.onChangeRating}
                        />
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="submit" value="Create Movie" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}