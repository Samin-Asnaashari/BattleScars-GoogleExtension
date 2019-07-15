import React from "react";
import Popover from "@material-ui/core/Popover";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  popover: {
    pointerEvents: "none"
  },
  paper: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    padding: "10px"
  }
});

/**
 *
 * Popover
 */
const CustomPopover = ({ open, content, anchorEl, classes }) => {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      anchorReference="anchorEl"
      className={classes.popover}
      classes={{
        paper: classes.paper
      }}
      anchorOrigin={{
        vertical: "center",
        horizontal: "left"
      }}
      transformOrigin={{
        vertical: "center",
        horizontal: "right"
      }}
    >
      {content}
    </Popover>
  );
};

export default withStyles(styles)(CustomPopover);
