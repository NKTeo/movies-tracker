import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./components/navbar-component"
import MovieList from "./components/movie-list-component";
import EditMovie from "./components/edit-movie-component";
import CreateMovie from "./components/create-movie-component";

function App() {
  return (
    <Router>
      <div style={{backgroundColor: "#f0f8ff", height: "100vh"}}>
      <Navbar /> 
      <br/>
      <Routes>
        {/* MovieList component */}
        <Route path="/" element={<MovieList/>} />
        {/* EditMovie component */}
        <Route path="/edit/:id" element={<EditMovie/>} />
        {/* CreateMovie component */}
        <Route path="/create" element={<CreateMovie/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
