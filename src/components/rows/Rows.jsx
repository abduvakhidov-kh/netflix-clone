import React, { useEffect, useState } from "react";
import axios from "../../axious";
import "./rows.css";

const base_url = "https://image.tmdb.org/t/p/original";

export default function Rows({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className="row__poster"
            src={`${base_url}${movie.poster_path}`}
            alt="name"
          />
        ))}
      </div>
    </div>
  );
}
