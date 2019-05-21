import React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const CustomDialog = props => {
  const {
    title,
    tabs,
    isOpen,
    onDialogClose,
    onDialogSave,
    children,
    fullScreen
  } = props;

  return (
    <Dialog
      fullScreen={fullScreen}
      open={isOpen}
      onClose={onDialogClose}
      TransitionComponent={Transition}
      aria-labelledby="custom-dialog"
      fullWidth={true}
      maxWidth="md"
      disableBackdropClick
    >
      <DialogTitle id="custom-dialog">
        <div style={{ marginBottom: "15px" }}>{title}</div>
        {tabs ? tabs : null}
      </DialogTitle>
      <DialogContent>
        {/* Content */}
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={onDialogClose} color="primary">
          <CancelIcon />
          Cancel
        </Button>
        <Button variant="contained" onClick={onDialogSave} color="primary">
          <SaveIcon />
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default withMobileDialog()(CustomDialog);
