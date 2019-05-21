import React, { Component } from "react";

import CustomDialog from "./common/customDialog";
import CustomTabs from "./common/customTabs";

class Setting extends Component {
  state = {
    tabs: [
      {
        _id: 0,
        label: "General",
        content: <h2>General</h2>
      },
      {
        _id: 1,
        label: "Background Image",
        content: <h2>Background Image</h2>
      }
    ]
  };

  handleSave = data => {
    console.log("Save Setting");
  };

  render() {
    return (
      <CustomDialog
        title="Setting"
        tabs={<CustomTabs tabs={this.state.tabs} title="Setting" />}
        isOpen={this.props.isOpen}
        onDialogClose={this.props.onDialogClose}
        onDialogSave={this.handleSave}
      />
    );
  }
}

export default Setting;
