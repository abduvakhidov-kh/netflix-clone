import React, { useState, useEffect } from "react";
import axious from "../../axious";
import requests from "../../request";
import "./banner.css";

export default function Banner() {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axious.get(requests.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <header>
      {/* title */}
      {/* desc */}
    </header>
  );
}
