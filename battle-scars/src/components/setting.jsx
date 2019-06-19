import React, { Component } from "react";
import "./../styles/setting.scss";

import CustomDialog from "./common/customDialog";
import CustomTabs from "./common/customTabs";
import ImageGridList from "./imageGridList";
import GeneralPreference from "./generalPreference";

/**
 * Setting: General Preference / Background Images
 */
class Setting extends Component {
  state = {
    tabs: [
      {
        _id: 0,
        label: "General",
        content: (
          <div>
            <h2>General</h2>
            <GeneralPreference
              currentLocation={this.props.currentLocation}
              gredientColorEnabled={this.props.gredientColorEnabled}
              drawerColor1={this.props.drawerColor1}
              drawerColor2={this.props.drawerColor2}
              theme={this.props.theme}
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
            <ImageGridList backgroundImage={this.props.backgroundImage} />
          </div>
        )
      }
    ]
  };
  render() {
    return (
      <CustomDialog
        title="Setting"
        tabs={<CustomTabs tabs={this.state.tabs} />}
        isOpen={this.props.isOpen}
        onDialogClose={this.props.onDialogClose}
        onDialogSave={() => this.props.handleSettingSave()}
        fullScreen={false}
      />
    );
  }
}

export default Setting;
