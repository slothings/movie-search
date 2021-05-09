import React from "react";

const SearchList = (props) => {
  const { movieList, handleNominateClick, actionText } = props;
  // console.log("SearchList" + movieList);
  return (
    <>
      {movieList && movieList.map((movie, index) => (
        <div className="card p-3">
          <h6>{movie.Title}</h6>
          <p><small>({movie.Year})</small></p>
          <button
            key={movie.id}
            id={movie.id}
            onClick={() => handleNominateClick(movie)}>{actionText}
          </button>
        </div>
      ))}
    </>
  )
}

export default SearchList;