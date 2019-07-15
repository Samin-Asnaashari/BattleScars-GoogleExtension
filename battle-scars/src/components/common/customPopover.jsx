import React from "react";
import Popover from "@material-ui/core/Popover";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  popover: {
    pointerEvents: "none"
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
      anchorOrigin={{
        vertical: "top",
        horizontal: "left"
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
    >
      {content}
    </Popover>
  );
};

export default withStyles(styles)(CustomPopover);
