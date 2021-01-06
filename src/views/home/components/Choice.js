import React, { Component } from "react";
import { connect } from "react-redux";

import { changeSelection } from "../../../actions/options.action";
import Options from "./options/Options";

class Choice extends Component {
  onHandleSelection = (selection) =>
    this.props.dispatch(changeSelection({ selection }));

  render() {
    return (
      <div className="home__choice">
        <div className="home__options">
          <Options
            selection={this.props.selection}
            onHandleSelection={this.onHandleSelection}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ selection: state.option.selection });

export default connect(mapStateToProps)(Choice);
