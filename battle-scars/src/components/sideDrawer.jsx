import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import Setting from "./setting";

const drawerWidth = 170;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  paper: {
    background: "linear-gradient(45deg, #BFE6BA 30%, #D3959B 70%)"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 8 + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0 8px",
    ...theme.mixins.toolbar
  }
});

class SideDrawer extends Component {
  iconClass = "menu__icon fa fa-2x fa";
  state = {
    open: false,
    menuItems: [
      {
        _id: 0,
        title: "My Smiles",
        iconClass: this.iconClass + "-gratipay"
      },
      {
        _id: 1,
        title: "News",
        iconClass: this.iconClass + "-newspaper-o"
      },
      {
        _id: 2,
        title: "Stocks",
        iconClass: this.iconClass + "-money"
      },
      {
        _id: 3,
        title: "Feedback",
        iconClass: this.iconClass + "-comments-o"
      },
      {
        _id: 4,
        title: "Settings",
        iconClass: this.iconClass + "-cog",
        isDialogOpen: false,
        component: function(parnet) {
          return (
            <Setting
              isOpen={this.isDialogOpen}
              onDialogClose={() => parnet.handleDilog(this, false)}
            />
          );
        }
      }
    ]
  };

  /**
   * Handle drawer close/open
   */
  handleDrawer = () => {
    this.setState({ open: !this.state.open });
  };

  /**
   * Handle dialog close/open
   */
  handleDilog = (menuItem, isOpen) => {
    const menuItems = [...this.state.menuItems];
    const index = menuItems.indexOf(menuItem);
    menuItems[index] = { ...menuItem };
    // menuItems[index].isDialogOpen = !menuItems[index].isDialogOpen;
    // true: open, false: close
    menuItems[index].isDialogOpen = isOpen;
    this.setState({ menuItems });
  };

  render() {
    const { classes, theme, children, ...other } = this.props;
    const { open, menuItems } = this.state;
    const avatar = require("./../assets/background-images/nathan-glynn-1462155-unsplash.jpg");

    return (
      <Drawer
        variant="permanent"
        anchor="right"
        className={classNames(classes.root, classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          root: classes.root,
          paper: classNames(classes.paper, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        open={open}
      >
        {/* Toggle drawer */}
        <div className={classes.toolbar}>
          <IconButton onClick={this.handleDrawer}>
            {theme.direction === "rtl" || open === true ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        {/* My Profile (My Details, Musics - Movies - Travels - Books - Bookmarks)*/}
        <ListItem button key="profile" className={classes.toolbar}>
          <Avatar alt="profile" src={avatar} />
          <ListItemText primary="My Profile" />
        </ListItem>
        <Divider />
        {/* Menu itmes */}
        <List>
          {menuItems.map(item => (
            <div key={item._id}>
              <ListItem button onClick={() => this.handleDilog(item, true)}>
                <ListItemIcon>
                  <i className={item.iconClass} />
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
              {item.component ? item.component(this) : null}
            </div>
          ))}
        </List>
      </Drawer>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SideDrawer);
