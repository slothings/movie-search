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

  useEffect(() => {
    searchMovie(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieNominations = JSON.parse(
      localStorage.getItem("Movie Nominations")
    );

    setNominateList(movieNominations);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("Movie Nominations", JSON.stringify(items))
  }

  const nominateMovie = (movie) => {
    const newMovieList = [...nominateList, movie]
    newMovieList.filter(
      (nominate) => nominate.imdbID !== movie.imdbID
    );
    setNominateList(newMovieList);
    saveToLocalStorage(newMovieList);
  }

  const removeMovie = (movie) => {
    const newMovieList = nominateList.filter(
      (nominate) => nominate.imdbID !== movie.imdbID
    );
    setNominateList(newMovieList);
    saveToLocalStorage(newMovieList);
  }

  return (
    <div className="container-fluid movie-app">
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <Header heading='Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className='row'>
        <SearchList
          movieList={movies}
          handleNominateClick={nominateMovie}
          actionText="Nominate"
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Header heading="Nominate List" />
      </div>
      <div className="row">
        <SearchList
          movieList={nominateList}
          handleNominateClick={removeMovie}
          actionText="Remove"
        />
      </div>
    </div>
  );
};

export default App;