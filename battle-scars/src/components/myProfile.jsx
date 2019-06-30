import React, { Component } from "react";
import "./../styles/myProfile.scss";

import CustomDialog from "./common/customDialog";
import CustomTabs from "./common/customTabs";

/**
 * My Profile
 */
class MyProfile extends Component {
  state = {};

  render() {
    const tabs = [
      {
        _id: 0,
        label: "---",
        content: <div />
      },
      {
        _id: 1,
        label: "---",
        content: <div />
      }
    ];

    return (
      <CustomDialog
        title="My Profile"
        tabs={<CustomTabs tabs={tabs} />}
        isOpen={this.props.isOpen}
        onDialogClose={this.props.onDialogClose}
        // onDialogSave={() => this.props.()}
        fullScreen={false}
      />
    );
  }
}

export default MyProfile;
