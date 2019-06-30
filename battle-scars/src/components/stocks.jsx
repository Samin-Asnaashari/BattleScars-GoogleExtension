import React, { Component } from "react";
import "./../styles/stocks.scss";

import CustomDialog from "./common/customDialog";
import CustomTabs from "./common/customTabs";

/**
 * Latest Stocks
 */
class Stocks extends Component {
  state = {};

  //   TODO: Customize

  render() {
    const tabs = [
      {
        _id: 0,
        label: "Stocks",
        content: <div />
      }
    ];

    return (
      <CustomDialog
        title="Stocks"
        tabs={<CustomTabs tabs={tabs} />}
        isOpen={this.props.isOpen}
        onDialogClose={this.props.onDialogClose}
        // onDialogSave={() => this.props.()}
        fullScreen={false}
      />
    );
  }
}

export default Stocks;
