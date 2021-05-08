import React, { useState } from "react";
import "./Search.css";
import SearchList from "../SearchList/SearchList.jsx"

export default function Search() {

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([])

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("submitting");

    const url = `http://www.omdbapi.com/?s=${query}&apikey=8b285a19`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.Search);
    }

    catch (err) {
      console.log(err);
    }

  }

  return (
    <>
      <form className="form" onSubmit={searchMovie}>
        <label className="label" htmlFor="query">Movie Name</label>
        <input className="input" type="text" name="query"
          placeholder="ex. Fight Club"
          value={query} onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">Search</button>
      </form>
      <div className="card-list">
        <SearchList movies={movies} />
      </div>
    </>
  )
}