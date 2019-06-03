import React, { Component } from "react";

import CustomDialog from "./common/customDialog";
import CustomTabs from "./common/customTabs";
import ImageGridList from "./imageGridList";

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
        content: (
          <div>
            <h2>Background Images</h2>
            <ImageGridList />
          </div>
        )
      }
    ],
    selectedBackgroundImage: "",
    drawerColor: "",
    bookmarkEnabled: true,
    bookmarks: [],
    // quoteCategory: ""
    weatherLocations: [],
    clockLocations: []
  };

  // http://worldtimeapi.org/api/timezone

  render() {
    return (
      <CustomDialog
        title="Setting"
        tabs={<CustomTabs tabs={this.state.tabs} />}
        isOpen={this.props.isOpen}
        onDialogClose={this.props.onDialogClose}
        onDialogSave={() => this.props.handleSettingSave()}
      />
    );
  }
}

export default Setting;
