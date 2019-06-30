import React, { Component } from "react";
// import "./../styles/myProfile.scss";

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
        label: "Personal Details",
        content: <div />
      },
      {
        _id: 1,
        label: "Arts",
        content: <div />
      },
      {
        _id: 2,
        label: "Musics",
        content: <div />
      },
      {
        _id: 3,
        label: "Movies",
        content: <div />
      },
      {
        _id: 4,
        label: "Games",
        content: <div />
      },
      {
        _id: 5,
        label: "Books",
        content: <div />
      },
      {
        _id: 6,
        label: "World Visits",
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
