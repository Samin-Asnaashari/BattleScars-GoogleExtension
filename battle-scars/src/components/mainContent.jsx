import React, { Component } from "react";
import "./css/mainContent.scss";
import SearchBox from "./searchBox";

class MainContent extends Component {
  render() {
    return (
      <section
        className={
          this.props.expanded
            ? "main-content main-content--expanded"
            : "main-content"
        }
      >
        <div class="row justify-content-md-center">
          <div class="col col-lg-6">
            <SearchBox />
          </div>
        </div>
      </section>
    );
  }
}

export default MainContent;
