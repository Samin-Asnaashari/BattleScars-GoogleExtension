import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import classNames from "classnames";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
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

import Settings from "./settings";
import MySmiles from "./mySmiles";
import News from "./news";
import Stocks from "./stocks";
import MyProfile from "./myProfile";

const drawerWidth = 170;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
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
  },
  manuIcon: {
    color: "#555555"
  }
});

class SideDrawer extends Component {
  iconClass = `${this.props.classes.manuIcon} fa fa-2x fa`;
  state = {
    isDrawerOpen: false,
    isProfileOpen: false,
    menuItems: [
      {
        _id: 0,
        title: "My Smiles",
        iconClass: this.iconClass + "-gratipay",
        isDialogOpen: false,
        component: function(parent) {
          return (
            <MySmiles
              isOpen={this.isDialogOpen}
              onDialogClose={() => parent.handleDilog(this, false)}
              // onSmilesSave={parent.props.handleSmilesSave}
            />
          );
        }
      },
      {
        _id: 1,
        title: "News",
        iconClass: this.iconClass + "-newspaper-o",
        isDialogOpen: false,
        component: function(parent) {
          return (
            <News
              isOpen={this.isDialogOpen}
              onDialogClose={() => parent.handleDilog(this, false)}
              // onNewsSave={parent.props.handleNewsSave}
            />
          );
        }
      },
      {
        _id: 2,
        title: "Stocks",
        iconClass: this.iconClass + "-money",
        isDialogOpen: false,
        component: function(parent) {
          return (
            <Stocks
              isOpen={this.isDialogOpen}
              onDialogClose={() => parent.handleDilog(this, false)}
              // onStocksSave={parent.props.handleStocksSave}
            />
          );
        }
      },
      {
        _id: 3,
        title: "Settings",
        iconClass: this.iconClass + "-cog",
        isDialogOpen: false,
        component: function(parent) {
          return (
            <Settings
              isOpen={this.isDialogOpen}
              onDialogClose={() => parent.handleDilog(this, false)}
              onSettingSave={data => {
                parent.props.onSettingSave(data);
                parent.handleDilog(this, false);
              }}
              currentLocation={parent.props.currentLocation}
              data={parent.props.data}
            />
          );
        }
      }
      // {
      //   _id: -,
      //   title: "Feedback",
      //   iconClass: this.iconClass + "-comments-o",
      //   isDialogOpen: false
      //   // component: function(parent) { : TODO:
      //   // return (
      //   // <Feedback
      //   // isOpen={this.isDialogOpen}
      //   // onDialogClose={() => parent.handleDilog(this, false)}
      //   // handleFeedbackSave={parent.props.handleFeedbackSave}
      //   // />
      //   // );
      //   // }
      // },
    ]
  };

  /**
   * Handle drawer close/open
   */
  handleDrawer = () => {
    this.setState({ isDrawerOpen: !this.state.isDrawerOpen });
  };

  /**
   * Handle Profile close/open
   */
  handleProfileDilog = isOpen => {
    this.setState({ isProfileOpen: isOpen });
  };

  /**
   * Handle dialog close/open
   */
  handleDilog = (menuItem, isOpen) => {
    const menuItems = [...this.state.menuItems];
    const index = menuItems.indexOf(menuItem);
    // menuItems[index] = { ...menuItem };
    // true: open, false: close
    menuItems[index].isDialogOpen = isOpen;
    this.setState({ menuItems });
  };

  render() {
    const { classes, theme, children, ...other } = this.props;
    const {
      gradientColorEnabled,
      drawerColor1,
      drawerColor2
    } = this.props.data;
    const { isProfileOpen, isDrawerOpen, menuItems } = this.state;
    const avatar = require("./../assets/background-images/nathan-glynn-1462155-unsplash.jpg");

    const dynamicStyles = createMuiTheme({
      overrides: {
        MuiDrawer: {
          paper: {
            // background: "linear-gradient(45deg, #BFE6BA 30%, #D3959B 70%)" #8ea6b4, #ff9e99
            background: gradientColorEnabled
              ? `linear-gradient(${drawerColor1}, ${drawerColor2})`
              : drawerColor1
          }
        }
      }
    });

    return (
      <MuiThemeProvider theme={dynamicStyles}>
        <Drawer
          variant="permanent"
          anchor="right"
          className={classNames(classes.root, classes.drawer, {
            [classes.drawerOpen]: isDrawerOpen,
            [classes.drawerClose]: !isDrawerOpen
          })}
          classes={{
            root: classes.root,
            paper: classNames(classes.paper, {
              [classes.drawerOpen]: isDrawerOpen,
              [classes.drawerClose]: !isDrawerOpen
            })
          }}
          open={isDrawerOpen}
        >
          {/* Toggle drawer */}
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawer}>
              {theme.direction === "rtl" || isDrawerOpen === true ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          {/* My Profile */}
          <ListItem
            button
            key="profile"
            className={classes.toolbar}
            onClick={() => this.handleProfileDilog(true)}
          >
            <Avatar alt="profile" src={avatar} />
            <ListItemText primary="My Profile" />
          </ListItem>
          <MyProfile
            isOpen={isProfileOpen}
            onDialogClose={() => this.handleProfileDilog(false)}
            // onProfileSave={() => }
          />
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
                {/* FIXME: is only needed to check if component exist for now */}
                {item.component ? item.component(this) : null}
              </div>
            ))}
          </List>
        </Drawer>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SideDrawer);
