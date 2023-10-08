import React from "react";
import { useState, useEffect } from "react";

import "./App.css";
import SearchIcon from "./search.svg";
import Search from "./Search";
import MovieCard from "./MovieCard";

const API_URL = "https://www.omdbapi.com?apikey=63d34323";

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies({searchTerm});
  }, []);
  const [movies, setMovies] = useState([]);

  return (
    <div className="app">
      <h1>Movie Land</h1>
      {/* <Search searchIcon={SearchIcon} /> */}
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value)}}
        />
        <img src={SearchIcon} alt="search" 
		onClick={() => {searchMovies(searchTerm)}} />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          //{" "}
          {movies.map((movie) => {
            return <MovieCard movie={movie} />;
          })}
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
