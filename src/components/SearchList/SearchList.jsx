import React from "react";

const SearchList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="card" key={movie.id}>
          <div className="card-content">
            <h5 className="card-title">{movie.Title}</h5>
            <p><small>Release Date: {movie.Year}</small></p>
          </div>
        </div>
      ))}
    </>
  )
}

export default SearchList;