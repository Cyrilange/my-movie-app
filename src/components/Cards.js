import React from "react";
import "./card.css";

const Cards = ({ movie }) => {
  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };

  const genreFinder = () => {
    let genreArray = [];
    for (let i = 0; i < movie.genre_ids.length; i++) {
      switch (movie.genre_ids[i]) {
        case 28:
          genreArray.push(`Action`);
          break;
        case 12:
          genreArray.push(`Aventure`);
          break;
        case 16:
          genreArray.push(`Animation`);
          break;
        case 35:
          genreArray.push(`Comédie`);
          break;
        case 80:
          genreArray.push(`Policier`);
          break;
        case 99:
          genreArray.push(`Documentaire`);
          break;
        case 18:
          genreArray.push(`Drame`);
          break;
        case 10751:
          genreArray.push(`Famille`);
          break;
        case 14:
          genreArray.push(`Fantasy`);
          break;
        case 36:
          genreArray.push(`Histoire`);
          break;
        case 27:
          genreArray.push(`Horreur`);
          break;
        case 10402:
          genreArray.push(`Musique`);
          break;
        case 9648:
          genreArray.push(`Mystère`);
          break;
        case 10749:
          genreArray.push(`Romance`);
          break;
        case 878:
          genreArray.push(`Science-fiction`);
          break;
        case 10770:
          genreArray.push(`Téléfilm`);
          break;
        case 53:
          genreArray.push(`Thriller`);
          break;
        case 10752:
          genreArray.push(`Guerre`);
          break;
        case 37:
          genreArray.push(`Western`);
          break;
        default:
          break;
      }

      return genreArray.map((genre) => <li key={genre}>{genre}</li>);
    }
  };

  const addStorage = () => {
    let storedData = window.localStorage.movies
      ? window.localStorage.movie.split(",")
      : [];

    if (!storedData.includes(movie.id.toString())) {
      storedData.push(movie.id);
      window.localStorage.movies = storedData;
    }
  };

  const deleteStorage = () => {
    let storeData = window.localeStorage.movies.split(",");
    let newData = storeData.filter((id) => id !== movie.id);
    window.localStorage.movies = newData;
  };

  return (
    <div className="card">
      <div className="inside">
        <img
          src={
            movie.poster_path
              ? "https://image.tmdb.org/t/p/original/" + movie.poster_path
              : "./img/poster.jpg"
          }
          alt={`affiche ${movie.title}`}
        />
        <h2>{movie.title}</h2>
        {movie.release_date ? (
          <h5>Sortie le : {dateFormater(movie.release_date)}</h5>
        ) : null}
        <h4>
          {movie.vote_average} / 10 <span id="star">⭐</span>
        </h4>
        <ul id="genre">{movie.genre_ids ? genreFinder() : null}</ul>
        {movie.overview ? <h3>Synopsis</h3> : ""}
        <p>{movie.overview}</p>
        {movie.genre_ids ? (
          <div className="btn-like" onClick={() => addStorage()}>
            👍
          </div>
        ) : (
          <div
            className="btn"
            onClick={() => {
              deleteStorage();
              window.location.reload();
            }}
          >
            Delete
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
