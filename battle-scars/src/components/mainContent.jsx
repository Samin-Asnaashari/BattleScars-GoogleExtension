import React, { Component } from "react";
import { BrowserRouter, Link, NavLink } from "react-router-dom";
import "./../styles/mainContent.scss";
import SearchBox from "./searchBox";

class MainContent extends Component {
  render() {
    return (
      <section
        className={
          this.props.expanded
            ? "main-content main-content--expanded container-fluid"
            : "main-content container-fluid"
        }
      >
        <div className="row justify-content-md-center">
          <div className="col col-lg-6">
            <SearchBox />
          </div>
        </div>
      </section>
    );
  }
}

export default MainContent;
