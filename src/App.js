//  81237eee
//  http://www.omdbapi.com/?i=tt3896198&apikey=81237eee
import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./Moviecard";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  const API_URL = "http://www.omdbapi.com?apikey=81237eee";

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovie("justice league");
  }, []);

  // const movie = {
  //   Title: "Lois & Clark: The New Adventures of Superman",
  //   Year: "1993–1997",
  //   imdbID: "tt0106057",
  //   Type: "series",
  //   Poster:
  //     "https://m.media-amazon.com/images/M/MV5BZTU1ZGFjNzEtZWYzZC00ZmI0LTg2NmMtN2YyNTY4YzhlODIyXkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_SX300.jpg",
  // };
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovie(searchWord)}
        />
      </div>

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Movies not found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
