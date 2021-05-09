import React from "react";

const SearchList = (props) => {
  const { movieList, handleNominateClick, actionText } = props;
  // console.log("SearchList" + movieList);
  return (
    <>
      {movieList && movieList.map((movie, index) => (
        <div className="d-flex justify-content-start m-3">
          <h5>{movie.Title}</h5>
          <p><small>Release Date: {movie.Year}</small></p>
          <div className="d-flex align-items-center justify-content-center"
            key={movie.id}
            id={movie.id}>
            <button className="mr-2"
              onClick={() => handleNominateClick(movie)}>{actionText}</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default SearchList;