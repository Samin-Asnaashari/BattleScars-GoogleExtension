import React, { Component } from "react";
import "./../../styles/customTabs.scss";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

/**
 * Custom Tabs with dynamic data and content
 */
class CustomTabs extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { tabs } = this.props;
    const { value } = this.state;

    return (
      <Paper square classes={{ root: "tabs-container" }}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChange}
        >
          {tabs.map(item => (
            <Tab label={item.label} key={item._id} />
          ))}
        </Tabs>
        <TabContainer>{tabs[value].content}</TabContainer>
      </Paper>
    );
  }
}

function TabContainer(props) {
  return <div style={{ padding: 8 * 3 }}>{props.children}</div>;
}

export default CustomTabs;
