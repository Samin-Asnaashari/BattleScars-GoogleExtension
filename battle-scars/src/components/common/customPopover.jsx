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
      className={classes.popover}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left"
      }}
      disableRestoreFocus
    >
      {content}
    </Popover>
  );
};

export default withStyles(styles)(CustomPopover);
