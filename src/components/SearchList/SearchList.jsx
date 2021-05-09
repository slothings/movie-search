import React from "react";

const SearchList = (props) => {
  const { movieList, handleNominateClick, actionText } = props;
  // console.log("SearchList" + movieList);
  return (
    <>
      {movieList && movieList.map((movie, index) => (
        <div className="card">
          <div className="d-flex justify-content-start m-1">
            <h6>{movie.Title}</h6>
          </div>
          <div className="d-flex justify-content-start m-1">
            <p><small>Release Date: {movie.Year}</small></p>
          </div>
          <div className="d-flex justify-content-start m-1">
            <button
              className="mr-2"
              key={movie.id}
              id={movie.id}
              onClick={() => handleNominateClick(movie)}>{actionText}
            </button>
          </div>
        </div>
      ))}
    </>
  )
}

export default SearchList;