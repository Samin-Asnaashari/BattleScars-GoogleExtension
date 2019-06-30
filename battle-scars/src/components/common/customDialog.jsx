import React from "react";
import "./../../styles/customDialog.scss";
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

/**
 * Custom Dialog with dynamic content
 */
const CustomDialog = props => {
  const {
    title,
    tabs,
    isOpen,
    onDialogClose,
    onDialogSave,
    children,
    fullScreen,
    disableBackdropClick
  } = props;

  return (
    <Dialog
      fullScreen={fullScreen}
      open={isOpen}
      onClose={onDialogClose}
      aria-labelledby="custom-dialog"
      fullWidth={true}
      maxWidth="md"
      // disableBackdropClick
      // TransitionComponent={Transition}
    >
      <DialogTitle id="custom-dialog">
        <div>{title}</div>
      </DialogTitle>
      <DialogContent
        dividers="true"
        classes={{ root: "dialog-content-container" }}
      >
        {tabs ? tabs : null}
        {/* Content */}
        {children}
      </DialogContent>
      {onDialogClose && onDialogSave ? (
        <DialogActions>
          <Button
            onClick={onDialogClose}
            color="primary"
            className="cancel__btn"
          >
            <CancelIcon />
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={onDialogSave}
            color="primary"
            className="save__btn"
          >
            <SaveIcon />
            Save
          </Button>
        </DialogActions>
      ) : null}
    </Dialog>
  );
};

export default withMobileDialog()(CustomDialog);
