import React, { Component } from "react";
import "./css/sideBar.scss";
import _ from "lodash";

class SideBar extends Component {
  state = {
    menuItems: [
      { _id: 1, title: "Home", className: "fa fa-home" },
      { _id: 2, title: "My Smiles", className: "fa fa-heart-o" },
      { _id: 3, title: "News", className: "fa fa-newspaper-o" },
      { _id: 4, title: "Stocks", className: "fa fa-money" },
      { _id: 5, title: "Feedback", className: "fa fa-comments-o" },
      { _id: 6, title: "Settings", className: "fa fa-cog" }
    ]
  };

  render() {
    const { menuItems } = this.state;

    return (
      <div
        className={
          this.props.expanded ? "sidebar sidebar--expanded" : "sidebar"
        }
      >
        <div class="btn-group-vertical">
          <button class="btn btn-lg" onClick={this.props.toggleSidebar}>
            <i class="fa fa-bars" />
          </button>
          <button class="btn btn-lg">My Profile</button>
          {menuItems.map(item => (
            <button class="btn btn-lg">
              <i class={item.className} />
              {item.title}
            </button>
          ))}
        </div>
        <span className="shape" />
        <span className="shape" />
      </div>
    );
  }
}

export default SideBar;
