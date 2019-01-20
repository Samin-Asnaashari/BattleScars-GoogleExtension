import React, { Component } from "react";
import "./App.css";
import SearchBox from "./components/searchBox";
import logo from "./logo.svg";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <main className="container-fluid">
          <div class="row justify-content-md-center">
            <div class="col col-lg-6">
              <SearchBox />
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
