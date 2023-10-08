
import React from "react";

const Search = ({searchIcon}) => {
    return(
        <div className="search">
            <input
                placeholder="Search for movies"
                value="Gay Batman"
                onChange={ () => {} }
            />
            <img
                src={searchIcon}
                alt="search"
                onClick={ () => {} }
            />
        </div>
    );
}

export default Search;