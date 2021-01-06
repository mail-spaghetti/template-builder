import React, { Component } from "react";
import { connect } from "react-redux";
import Options from "./options/Options";

class Choice extends Component {
  render() {
    return (
      <div className="home__choice">
        <div className="home__options">
          <Options selection={this.props.selection} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ selection: state.option.selection });

export default connect(mapStateToProps)(Choice);
