import React from "react";

const SearchList = (props) => {

  const { movieList, handleNominateClick, actionText } = props;
  // console.log("SearchList" + movieList);
  return (
    <>
      {movieList && movieList.map((movie, index) => (
        <div className="card p-3"
          key={movie.id}
          id={movie.id}>
          <h6>{movie.Title}</h6>
          <small>({movie.Year})</small>
          <button
            onClick={() => handleNominateClick(movie)}>{actionText}
          </button>
        </div>
      ))}
    </>
  );
};

export default SearchList;