import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form className="form">
      <label className="label" htmlFor="query">Movie Name</label>
      <input className="input" type="text" name="query"
        placeholder="i.e. Fight Club" />
      <button className="button" type="submit">Search</button>
    </form>
  )
}