import React, { useState, useEffect } from "react";
import SearchList from "./components/SearchList/SearchList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import Header from "./components/Header/Header.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [nominateList, setNominateList] = useState([]);

  const searchMovie = async (searchValue) => {

    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=8b285a19`;

    const res = await fetch(url);
    const data = await res.json();
    // console.log("Data" + data.Search);
    console.log(data.Search);

    if (data.Search) {
      setMovies(data.Search);
    }
  }

  const nominateMovie = (movie) => {
    const newNominateList = [...nominateList, movie];
    setNominateList(newNominateList);
  }

  const removeMovie = (movie) => {
    const newNominateList = nominateList.filter(
      ((nominate) => nominate.imdbID !== movie.imdbID)
    );
    console.log(newNominateList);
    setNominateList(newNominateList);
  }

  useEffect(() => {
    searchMovie(searchValue);
  }, [searchValue]);

  return (
    <div className="container-fluid movie-app">
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <Header heading='Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className='row'>
        <SearchList
          actionText="Nominate"
          movieList={movies}
          handleNominateClick={nominateMovie}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Header heading="Nominate List" />
      </div>
      <div className="row">
        <SearchList
          actionText="Remove"
          movieList={nominateList}
          handleNominateClick={removeMovie}
        />
      </div>
    </div>
  );
};

export default App;