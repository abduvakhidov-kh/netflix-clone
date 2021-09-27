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
      {/* <Rows title="NETFLIX ORIGINALS" />
      <Rows title="NETFLIX ORIGINALS" /> */}
    </>
  );
}

export default App;
