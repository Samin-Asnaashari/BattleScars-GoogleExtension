import React from "react";

import Dialog from "@material-ui/core/Dialog";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import Slide from "@material-ui/core/Slide";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const CustomDialog = props => {
  const { fullScreen } = props;
  return (
    <Dialog
      fullScreen={fullScreen}
      open={props.isOpen}
      onClose={props.onDialogClose}
      TransitionComponent={Transition}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
      <DialogContent>
        {/* Content */}
        {props.children}
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onDialogClose} color="primary">
          <CancelIcon />
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={props.onDialogSave}
          color="primary"
        >
          <SaveIcon />
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default withMobileDialog()(CustomDialog);
