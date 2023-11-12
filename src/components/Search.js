import React, { useEffect, useState } from "react";
import "./search.css";
import axios from "axios";
import Cards from "./Cards";

const Search = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [search, setSearch] = useState("code");
  const [sortGoodBad, setSortGoodBad] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}&language=fr-FR`
      )
      .then((res) => setMoviesData(res.data.results));
  }, [search]);

  return (
    <div className="search-container">
      <div className="form">
        <form className="form-container" action="">
          <input
            type="text"
            placeholder="Choose your movie"
            id="search-input"
            onChange={(e) => setSearch(e.target.value)}
          />
          <input type="submit" value="Search" />
        </form>

        <div className="note-container">
          <div
            className="btn"
            id="goodToBad"
            onClick={() => setSortGoodBad("goodToBad")}
          >
            Bad <span>-</span>
          </div>
          <div
            className="btn"
            id="badToGood"
            onClick={() => setSortGoodBad("badToGood")}
          >
            Top <span>+</span>
          </div>
        </div>
        <div className="resultat">
          {moviesData

            // eslint-disable-next-line array-callback-return
            .sort((a, b) => {
              if (sortGoodBad === "goodToBad") {
                return b.vote_average - a.vote_average;
              } else if (sortGoodBad === "badToGood") {
                return a.vote_average - b.vote_average;
              }
            })
            .map((movie) => (
              <Cards movie={movie} key={movie.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
