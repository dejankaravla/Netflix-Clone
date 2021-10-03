import React, { useEffect, useState } from "react";
import "./Baner.css";
import axsios from "./axsios";
import requests from "./requests";

function Baner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axsios.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
    }
    fetchData();
  }, []);
  console.log(movie);

  function truncate(str, n) {
    return str?.length < n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="baner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="baner__contents">
        <h1 className="baner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
}

export default Baner;
