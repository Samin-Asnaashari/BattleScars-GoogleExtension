import React, { Component } from "react";
import "./../styles/mySmiles.scss";

import CustomDialog from "./common/customDialog";
import CustomTabs from "./common/customTabs";

/**
 * My Smiles and Hapiness
 */
class MySmiles extends Component {
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
        title="My Smiles"
        tabs={<CustomTabs tabs={tabs} />}
        isOpen={this.props.isOpen}
        onDialogClose={this.props.onDialogClose}
        // onDialogSave={() => this.props.()}
        fullScreen={false}
      />
    );
  }
}

export default MySmiles;
