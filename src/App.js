import React from "react";
import { useEffect } from "react";

import './App.css'
import SearchIcon from './search.svg'
import Search from "./Search";
import MovieCard from "./MovieCard";

const API_URL = "https://www.omdbapi.com?apikey=63d34323";

const movie1 = {
  Title: "Batman v Superman: Dawn of Justice",
  Year: "2016",
  imdbID: "tt2975590",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
}

const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
    }

    useEffect(
        () => {
            searchMovies('Batman');
        }, []
    );

    return(
        <div className="app">
            <h1>Movie Land</h1>
            <Search searchIcon = {SearchIcon}/>
            <div className="container">
                <MovieCard movie={movie1}/>
            </div>
        </div>
    );
}

export default App;