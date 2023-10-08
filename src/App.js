import React from "react";
import { useState, useEffect } from "react";

import "./App.css";
import SearchIcon from "./search.svg";
import Search from "./Search";
import MovieCard from "./MovieCard";

const API_URL = "https://www.omdbapi.com?apikey=63d34323";

// const movie1 = {
//   Title: "Batman v Superman: Dawn of Justice",
//   Year: "2016",
//   imdbID: "tt2975590",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
// }

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);
  const [movies, setMovies] = useState([]);

  return (
    <div className="app">
      <h1>Movie Land</h1>
      <Search searchIcon={SearchIcon} />

      {movies.length > 0 ? (
        <div className="container">
          //{" "}
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
          //{" "}
        </div>
      ) : (
        <div>
          <h4>No Movies fetched from the API</h4>
        </div>
      )}
    </div>
  );
};

export default App;
