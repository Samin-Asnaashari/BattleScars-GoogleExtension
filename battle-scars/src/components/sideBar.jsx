import React, { Component } from "react";
import "./css/sideBar.scss";

class SideBar extends Component {
  render() {
    return (
      <div
        className={
          this.props.expanded ? "sidebar sidebar--expanded" : "sidebar"
        }
        onClick={this.props.toggleSidebar}
      >
        <span className="shape" />
        <span className="shape" />
      </div>
    );
  }
}

export default SideBar;
