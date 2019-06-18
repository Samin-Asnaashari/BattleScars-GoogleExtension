import React, { Component } from "react";
import "./../styles/searchBox.scss";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import CustomSelect from "./common/customSelect";

/**
 * Search Engine
 */
class SearchBox extends Component {
  searchEngineOptions = [
    {
      _id: 1,
      name: "Google",
      image: require("./../assets/search-engines/google.png")
    },
    {
      _id: 2,
      name: "Bing",
      image: require("./../assets/search-engines/bing.png")
    }
    // {
    //   _id: 3,
    //   name: "Wikipedia",
    //   image: require("./../assets/search-engines/wikipedia.png")
    // },
    // {
    //   _id: 4,
    //   name: "Yahoo",
    //   image: require("./../assets/search-engines/yahoo.png")
    // }
  ];

  state = {
    selectedEngine: this.searchEngineOptions[0],
    input: ""
  };

  /**
   * Set selected serach engine
   */
  handleSelectionChange = option => {
    // option.target.value = _id of the selected engine option
    this.setState({ selectedEngine: this.findEngine(option.target.value)[0] });
  };

  /**
   * Find specific search engine item
   */
  findEngine = value => {
    return this.searchEngineOptions.filter(engine => {
      return engine._id === value;
    });
  };

  /**
   * Handle search query
   * @param(input): search query
   */
  handleInputChange = input => {
    this.setState({ input: input.target.value });
  };

  /**
   * Handle search redirection
   */
  handleSearch = () => {
    if (typeof window !== "undefined") {
      window.location.href =
        "https://www." +
        this.state.selectedEngine.name +
        ".com/search?q=" +
        this.state.input;
    }
  };

  render() {
    return (
      <Grid item>
        <Paper className="search-container" elevation={1}>
          {/* Choose search engine  */}
          <CustomSelect
            options={this.searchEngineOptions}
            defaultSelection={this.state.selectedEngine}
            selectionChanged={this.handleSelectionChange}
          />
          <Divider className="divider" />
          {/* Search input */}
          <InputBase
            className="search__input"
            placeholder="Search with your favourite engine :)"
            onChange={this.handleInputChange}
            onKeyDown={event => {
              if (event.key === "Enter") {
                this.handleSearch();
              }
            }}
          />
          <Divider className="divider" />
          {/* Search button  */}
          <IconButton
            className="search__btn"
            aria-label="Search"
            onClick={this.handleSearch}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </Grid>
    );
  }
}

export default SearchBox;
