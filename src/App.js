import React from "react";
import Search from "./components/Search/Search.jsx";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <header className="title">
          <h1 className="title">Movie Search</h1>
          <Search />
        </header>
      </div>
    );
  }
}

export default App;
