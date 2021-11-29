import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Movie = props => {
    return ( // Functional Component
    <tr>
        <td>{props.movie.movie}</td>
        <td>{props.movie.category}</td>
        <td>{props.movie.description}</td>
        <td>{props.movie.status}</td>
        <td>{props.movie.rating}</td>
        <td>
        <Link to={"/edit/" + props.movie._id}>edit</Link> | <a href="#" onClick={() => { props.deleteMovie(props.movie._id) }}>delete</a>
            
        </td>
    </tr>
    )
}

export default class MovieList extends Component { // Class Component
    constructor(props) {
        super(props);

        this.deleteMovie = this.deleteMovie.bind(this)

        this.state = { movies: [] };
    }

    componentDidMount() {
        axios.get('https://movie-tracker-nk.herokuapp.com/movie')
            .then(response => {
                this.setState({ movies: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteMovie(id) {
        axios.delete('https://movie-tracker-nk.herokuapp.com/movie/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            movies: this.state.movies.filter(movie => movie._id !== id)
        })
    }

    MovieList() {
        return this.state.movies.map(currentMovie => {
            return <Movie movie={currentMovie} deleteMovie={this.deleteMovie} key={currentMovie._id} />;
        })
    }

    render() {
        return (
            <div class="container">
                <h3>Movie List!</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th style = {{width: "10%"}}>Movie</th>
                            <th style = {{width: "10%"}}>Category</th>
                            <th style = {{width: "50%"}}>Description</th>
                            <th>Status</th>
                            <th>Rating</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.MovieList()}
                    </tbody>
                </table>
            </div>
        )
    }
}