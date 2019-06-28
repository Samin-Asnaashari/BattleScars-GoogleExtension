import React, { Component } from "react";
import "./../styles/setting.scss";

import CustomDialog from "./common/customDialog";
import CustomTabs from "./common/customTabs";
import ImageGridList from "./imageGridList";
import GeneralPreference from "./generalPreference";

/**
 * Settings: General Preference / Background Images
 */
class Settings extends Component {
  state = {
    data: this.props.data
  };

  handleChanges = (property, value) => {
    const data = { ...this.state.data };
    data[property] = value;
    this.setState({ data });
  };

  render() {
    const tabs = [
      {
        _id: 0,
        label: "General",
        content: (
          <div>
            <h2>General</h2>
            <GeneralPreference
              handleChanges={this.handleChanges}
              currentLocation={this.props.currentLocation}
              data={this.state.data}
            />
          </div>
        )
      },
      {
        _id: 1,
        label: "Background Image",
        content: (
          <div>
            <h2>Background Images</h2>
            <ImageGridList
              backgroundImage={this.state.data.backgroundImage}
              handleChanges={this.handleChanges}
            />
          </div>
        )
      }
    ];

    return (
      <CustomDialog
        title="Settings"
        tabs={<CustomTabs tabs={tabs} />}
        isOpen={this.props.isOpen}
        onDialogClose={this.props.onDialogClose}
        onDialogSave={() => this.props.onSettingSave(this.state.data)}
        fullScreen={false}
      />
    );
  }
}

export default Settings;
