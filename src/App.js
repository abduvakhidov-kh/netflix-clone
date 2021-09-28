import React from "react";
import Rows from "./components/rows/Rows";
import request from "./request";
import Banner from "./components/Banner/Banner";
import "./App.css";
import Navbar from "./components/Navabar/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />

      <Rows
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Rows title="Trending Now" fetchUrl={request.fetchTrending} />
      <Rows title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Rows title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Rows title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Rows title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Rows title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Rows title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
