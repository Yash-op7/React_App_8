

const movie1 = {
  Title: "Batman Begins",
  Year: "2005",
  imdbID: "tt0372784",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
}


const Movie = () => {
    return (
        <div className="movie">
            <div>
                <p>{movie1.Title}</p>
            </div>
            <div>
                <img
                    src={movie1.Poster!=='N/A' ?
                     movie1.Poster
                      : 'https://www.via.placeholder.com/400'}
                    alt="poster"
                />
            </div>
            <div>
                <span>{movie1.Type}</span>
                <h3>{movie1.Title}</h3>
            </div>
        </div>
    );
}

export default Movie;