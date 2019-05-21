import React, { Component } from "react";
import ReactStickies from "react-stickies"; //ES6 https://reactjsexample.com/sticky-notes-for-react-application/
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  wrapperStyle: {
    position: "absolute"
  }
});

class StickyNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onAdd = () => {
    // TODO: Here Make service call to save notes
  };

  onDelete = () => {
    // TODO: Here Make service call to save notes
  };

  onSave = () => {
    // Delete the editorState before saving
    const notes = this.state.notes;
    notes.map(note => {
      delete note.editorState;
    });
    // TODO: Here Make service call to save notes
  };

  onChange = notes => {
    this.setState({
      // Update the notes state
      notes
    });
  };

  render() {
    // var grid = {
    //   w: 1,
    //   h: 1,
    //   minW: 1,
    //   maxW: 3,
    //   minH: 1,
    //   maxH: 3
    // };

    return (
      <Grid item>
        <ReactStickies
          notes={this.state.notes}
          onChange={this.onChange}
          tape={false}
          title={true}
          footer={true}
          isDraggable={true}
          isResizable={false}
          // colors: ?Array = [HexCodes]
          // grid={grid}
          // rowHeight=140
          // breakpoints= {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}
          // cols= {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}
          // layouts
          // layout= {i: string, x: number, y: number, w: number, h: number}
          wrapperStyle={{
            position: "absolute",
            width: "270px",
            height: "230px"
          }}
          noteStyle={{
            transform: "rotate(-5deg)",
            margin: "30px"
          }}
        />
      </Grid>
    );
  }
}

export default withStyles(styles, { withTheme: true })(StickyNote);
