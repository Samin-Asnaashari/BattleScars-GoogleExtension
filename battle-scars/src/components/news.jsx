import React, { Component } from "react";
import "./../styles/news.scss";

import CustomDialog from "./common/customDialog";
import CustomTabs from "./common/customTabs";

/**
 * News: Latest News
 */
class News extends Component {
  state = {};

  //   TODO: Customize

  render() {
    const tabs = [
      {
        _id: 0,
        label: "Latest News",
        content: <div />
      }
    ];

    return (
      <CustomDialog
        title="News"
        tabs={<CustomTabs tabs={tabs} />}
        isOpen={this.props.isOpen}
        onDialogClose={this.props.onDialogClose}
        // onDialogSave={() => this.props.()}
        fullScreen={false}
      />
    );
  }
}

export default News;
