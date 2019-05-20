import React, { Component } from "react";

import CustomDialog from "./common/customDialog";

class Setting extends Component {
  handleSave = data => {
    console.log("Save Setting");
  };

  render() {
    return (
      <CustomDialog
        title="Setting"
        onDialogClose={this.props.onDialogClose}
        onDialogSave={this.handleSave}
        isOpen={this.props.isOpen}
      >
        <h2>Here is the content</h2>
      </CustomDialog>
    );
  }
}

export default Setting;
