import React, { Component } from "react";
import "./css/sideBar.scss";
import _ from "lodash";

class SideBar extends Component {
  iconClass = "menu__icon fa fa-2x fa";
  state = {
    menuItems: [
      { _id: 1, title: "Home", iconClass: this.iconClass + "-home" },
      { _id: 2, title: "My Smiles", iconClass: this.iconClass + "-gratipay" },
      { _id: 3, title: "News", iconClass: this.iconClass + "-newspaper-o" },
      { _id: 4, title: "Stocks", iconClass: this.iconClass + "-money" },
      { _id: 5, title: "Feedback", iconClass: this.iconClass + "-comments-o" },
      { _id: 6, title: "Settings", iconClass: this.iconClass + "-cog" }
    ]
  };

  render() {
    const { menuItems } = this.state;
    const avatar = require("./../assets/background-images/nathan-glynn-1462155-unsplash.jpg");

    return (
      <div
        className={
          this.props.expanded ? "sidebar sidebar--expanded" : "sidebar"
        }
      >
        <div className="menu btn-group-vertical">
          <ul className="menu">
            <li className="menu__item" onClick={this.props.toggleSidebar}>
              <i
                className={
                  this.props.expanded
                    ? "toggle fa fa-arrow-circle-o-left"
                    : "toggle fa fa-arrow-circle-o-right"
                }
              />
            </li>
          </ul>

          {/* <div classNAme="avatar_item">
            <img src={avatar} className="avatar" />
            Profile
          </div> */}

          {menuItems.map(item => (
            <ul className="menu">
              <li className="menu__item">
                <i className={item.iconClass} />
                {item.title}
              </li>
            </ul>
          ))}
        </div>
        <span className="shape" />
        <span className="shape" />
      </div>
    );
  }
}

export default SideBar;
