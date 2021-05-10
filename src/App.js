import React, { useState, useEffect } from "react";
import SearchList from "./components/SearchList/SearchList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import Header from "./components/Header/Header.jsx";
import Banner from "react-js-banner";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [nominateList, setNominateList] = useState([]);

  const searchMovie = async (searchValue) => {

    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=8b285a19`;

    const res = await fetch(url);
    const data = await res.json();
    // console.log("Data" + data.Search);
    // console.log(data.Search);

    if (data.Search) {
      setMovies(data.Search);
    };
  };

  useEffect(() => {
    searchMovie(searchValue);
  }, [searchValue]);

  // useEffect(() => {
  //   const movieNominations = JSON.parse(localStorage.getItem("Movie Nominations"));

  //   setNominateList(movieNominations);
  // }, []);

  // const saveToLocalStorage = (items) => {
  //   localStorage.setItem("Movie Nominations", JSON.stringify(items));
  // };

  const nominateMovie = (movie) => {
    const newMovieList = [...nominateList, movie]
    const updatedMovieList = movies.filter((nominate) => nominate.imdbID !== movie.imdbID);
    // console.log("MOVIE LIST" + updatedMovieList);
    setNominateList(newMovieList);
    setMovies(updatedMovieList);
    // saveToLocalStorage(newMovieList);
  };

  const removeMovie = (movie) => {
    const newMovieList = nominateList.filter((nominate) => nominate.imdbID !== movie.imdbID);
    setNominateList(newMovieList);
    // setMovies([...movies, movie]);
    // saveToLocalStorage(newMovieList);
  }

  return (
    <>
      <div className="container-fluid">
        <div className="m-3 text-center">
          {nominateList.length === 5 && <Banner title="You've Nominated 5 Movies!" />}
          <Header heading="Movie Search" />
        </div>
        <div className="searchBar mb-5">
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <div className="row">
          <div className="col text-center">
            <div>
              <Header heading="Movies" />
              <div>
                <SearchList
                  movieList={movies}
                  handleNominateClick={nominateMovie}
                  actionText="Nominate"
                />
              </div>
            </div>
          </div>
          <div className="col">

          </div>
          <div className="col text-center">
            <div>
              <Header heading="Nominated" />
              <div>
                <SearchList
                  movieList={nominateList}
                  handleNominateClick={removeMovie}
                  actionText="Remove"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;