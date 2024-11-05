import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import data from "./data.json"

function App() {
  const postCount = data.length

  return (
    <>
      <Navbar />
      <main>
        <h2>Post Count: {postCount}</h2>
        <Posts data={data} />
      </main>
    </>
  );
}

export default App;
