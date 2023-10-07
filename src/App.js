import React from "react";
import { useEffect } from "react";

//63d34323

const API_URL = "https://www.omdbapi.com?apikey=63d34323";

const App = () => {
    const searchMovies = async (title) => {
        const response = async fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data);
    }

    useEffect(
        () => {

        }, []
    );


    return (
        <h1>bruh</h1>
    );
}

export default App;