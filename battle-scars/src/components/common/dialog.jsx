import React, { Component } from "react";

import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Dialog extends Component {
  state = {
    open: false
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                onClick={this.handleClose}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Setting
              </Typography>
              <Button color="inherit" onClick={this.handleClose}>
                Save
              </Button>
            </Toolbar>
          </AppBar>
          {/* Content */}
        </Dialog>
      </div>
    );
  }
}

export default Dialog;
