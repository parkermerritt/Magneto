import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Bio from "./components/Bio";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Bio />
      </div>
    );
  }
}

export default App;
