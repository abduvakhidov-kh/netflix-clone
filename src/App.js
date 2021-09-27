import React from "react";
import Rows from "./components/rows/Rows";
import request from "./request";

function App() {
  return (
    <>
      <Rows
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
      />
      <Rows title="Trending Now" fetchUrl={request.fetchTrending} />
      <Rows title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Rows title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Rows title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Rows title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Rows title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Rows title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </>
  );
}

export default App;
