import React from "react";

const SearchBox = (props) => {
  
  return (
    <div className="col col-sm-5">
      <input
        className="form-control text-center"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Search Movies Here"
      ></input>
    </div>
  );
};

export default SearchBox;