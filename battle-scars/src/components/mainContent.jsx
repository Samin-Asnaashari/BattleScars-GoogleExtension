import React, { Component } from "react";
import "./css/mainContent.scss";

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
        <header>
          <span />
          <ul>
            <li />
            <li />
            <li />
          </ul>
        </header>
        <div className="container">
          <div className="module--full" />
          <div className="module-wrapper">
            <div className="module--half" />
            <div className="module--half" />
          </div>
        </div>
      </section>
    );
  }
}

export default MainContent;
