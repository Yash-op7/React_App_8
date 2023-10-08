import React from "react";
import { useEffect } from "react";

import './App.css'
import SearchIcon from './search.svg'

const API_URL = "https://www.omdbapi.com?apikey=63d34323";


const App = () => {
    // const searchMovies = async (title) => {
    //     const response = await fetch(`${API_URL}&s=${title}`);
    //     const data = await response.json();
        // console.log(data.Search);
    // }

    // useEffect(
    //     () => {
    //         searchMovies('Batman');
    //     }, []
    // );


    return (
      <div className="app">
        <h1>Movie Land</h1>
        <div className="search">
          <input
            placeholder="Search for Movies"
            value="Batman"
            onChange={() => {}}
          />
          <img src={SearchIcon} alt="Search" 
          onClick={() => {}}/>
        </div>
        <div className="container">
          <Movie/>
        </div>
      </div>
    );
}

export default App;