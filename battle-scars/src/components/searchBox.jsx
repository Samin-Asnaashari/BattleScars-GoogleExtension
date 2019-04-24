import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import "./../styles/searchBox.scss";
import CustomSelect from "./common/customSelect";

class SearchBox extends Component {
  state = {
    selectedEngine: 1
  };

  handleSelectionChange = option => {
    this.setState({ selectedEngine: option.target.value });
  };

  render() {
    const searchEngineOptions = [
      {
        _id: "1",
        name: "Google",
        image: require("./../assets/search-engines/google.png")
      },
      {
        _id: "2",
        name: "Google",
        image: require("./../assets/search-engines/bing.png")
      },
      {
        _id: "3",
        name: "Google",
        image: require("./../assets/search-engines/wikipedia.png")
      },
      {
        _id: "4",
        name: "Google",
        image: require("./../assets/search-engines/yahoo.png")
      }
    ];

    return (
      <Grid item>
        <Paper className="search-container" elevation={1}>
          {/* choose search engine  */}
          <CustomSelect
            options={searchEngineOptions}
            defaultSelection={this.state.selectedEngine}
            selectionChanged={this.handleSelectionChange}
          />
          {/* search input */}
          <InputBase className="search__input" placeholder="Search" />
          <Divider className="divider" />
          {/* search btn  */}
          <IconButton className="search__btn" aria-label="Search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Grid>
    );
  }
}

export default SearchBox;
