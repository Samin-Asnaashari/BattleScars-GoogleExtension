import React, { Component } from "react";
import "./css/sideBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SideBar extends Component {
  render() {
    return (
      <div
        className={
          this.props.expanded ? "sidebar sidebar--expanded" : "sidebar"
        }
        onClick={this.props.toggleSidebar}
      >
        <div class="btn-group-vertical">
          <button class="btn btn-lg">
            <i class="fa fa-bars" />
          </button>
          <button class="btn btn-lg">My Profile</button>
          <button class="btn btn-lg">
            <i class="fa fa-home" />
            Home
          </button>
          <button class="btn btn-lg">
            <i class="fa fa-heart-o" />
            My Smiles
          </button>
          <button class="btn btn-lg">
            <i class="fa fa-newspaper-o" />
            News
          </button>
          <button class="btn btn-lg">
            <i class="fa fa-money" />
            Stocks
          </button>
          <button class="btn btn-lg">
            <i class="fa fa-comments-o" />
            Feedback
          </button>
          <button class="btn btn-lg">
            <i class="fa fa-cog" />
            Settings
          </button>
        </div>
        <span className="shape" />
        <span className="shape" />
      </div>
    );
  }
}

export default SideBar;
