import React, { Component } from "react";

import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import "./../styles/sideDrawer.scss";

import Drawer from "@material-ui/core/Drawer";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import HomeIcon from "@material-ui/icons/Home";

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
        _id: 1,
        title: "Home",
        iconClass: this.iconClass + "-home",
        icon: <HomeIcon />
      },
      { _id: 2, title: "My Smiles", iconClass: this.iconClass + "-gratipay" },
      { _id: 3, title: "News", iconClass: this.iconClass + "-newspaper-o" },
      { _id: 4, title: "Stocks", iconClass: this.iconClass + "-money" },
      { _id: 5, title: "Feedback", iconClass: this.iconClass + "-comments-o" },
      { _id: 6, title: "Settings", iconClass: this.iconClass + "-cog" }
    ]
  };

  handleDrawer = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes, theme, children, className, ...other } = this.props;
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
        <ListItem button key="profile" className={classes.toolbar}>
          <Avatar alt="profile" src={avatar} />
          <ListItemText primary="My Profile" />
        </ListItem>
        <Divider />
        <List>
          {menuItems.map(item => (
            <ListItem button key={item.title}>
              <ListItemIcon>
                {/* {item.icon} */}
                <i className={item.iconClass} />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
  }
}

// export default SideDrawer;
export default withStyles(styles, { withTheme: true })(SideDrawer);
