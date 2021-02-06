import React, { Component } from "react";
import { connect } from "react-redux";

import {
  changeSelection,
  setSelected,
  setType,
} from "../../../actions/optionsAction";
import { OPTIONS } from "../data";
import Blocks from "./blocks/Blocks";
import Options from "./options/Options";
import Structure from "./structure/Structure";
import Settings from "./settings/Settings";

class Choice extends Component {
  onHandleSelection = (selection) => {
    this.props.dispatch(setSelected({ selected: false }));
    this.props.dispatch(setType({ type: null }));
    this.props.dispatch(changeSelection({ selection }));
  };

  render() {
    return (
      <div className="home__choice">
        <div className="home__options">
          <Options
            selection={this.props.selection}
            onHandleSelection={this.onHandleSelection}
          />
          {this.props.selection === OPTIONS[0] && <Blocks />}
          {this.props.selection === OPTIONS[1] && <Structure />}
          {this.props.selection === OPTIONS[2] && <Settings />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ selection: state.option.selection });

export default connect(mapStateToProps)(Choice);
