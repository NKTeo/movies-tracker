import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return ( // Navbar from the bootstrap documentation
            
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <div className="container">
                    <Link to="/" className="navbar-brand">MovieTracker</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/" className="nav-link">View all Movies</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/create" className="nav-link">Add Movie</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}