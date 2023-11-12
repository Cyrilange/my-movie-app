import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../components/Cards";
import "./fav.css";
import axios from "axios";
import Cards from "../components/Cards";

const Favorites = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let moviesId = window.localStorage.movie
      ? window.localStorage.movies.split(",")
      : [];
    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR`
        )
        .then((res) => setListData((listData) => [...listData, res.data]));
    }
  }, []);

  return (
    <div class="Home-container">
      <Header />
      <h2 id="like">Like 💞</h2>
      <div className="result">
        {listData.length > 0 ? (
          listData.map((movie) => <Cards movie={movie} key={movie.id} />)
        ) : (
          <h2 id="bb">Nothing liked yet</h2>
        )}
      </div>
    </div>
  );
};

export default Favorites;
