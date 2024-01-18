import React from "react";
import { hindiMovies } from "./movieData";
import { useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";

function driveList(searchValue) {
  return hindiMovies.filter((movie) => {
    const { title, genre, actor, director } = movie;
    const lowerSearchValue = searchValue.toLowerCase();

    // Add logic for filtering based on the searchValue
    return (
      title.toLowerCase().includes(lowerSearchValue) ||
      genre.toLowerCase().includes(lowerSearchValue) ||
      actor.toLowerCase().includes(lowerSearchValue) ||
      director.toLowerCase().includes(lowerSearchValue)
    );
  });
}

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const movielist = driveList(inputValue);

    setList(movielist);

    setInputValue("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search title, actor, genere, director"
          name="inputText"
          value={inputValue}
          onChange={handleInput}
        />

        <button type="submit">Search</button>
      </form>
      <div className="movieList">
        {list.map((item, index) => {
          return <MovieCard key={index} cardDetail={item} />;
        })}
      </div>
    </>
  );
};

export default App;
