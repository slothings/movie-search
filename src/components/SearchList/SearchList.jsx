import React from "react";

const SearchList = (props) => {
  const NominateList = props.nominateList;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="d-flex justify-content-start m-3" key={movie.id}>
          <div className="card-content">
            <h5 className="card-title">{movie.Title}</h5>
            <p><small>Release Date: {movie.Year}</small></p>
            <div className="d-flex align-items-center justify-content-center" onClick={() => props.handleNominateClick(movie)}>
              <NominateList />
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default SearchList;