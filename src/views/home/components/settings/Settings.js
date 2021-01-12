import React, { Fragment } from "react";
import { connect } from "react-redux";

const Settings = ({ selection, ...rest }) => (
  <Fragment>
    {require(`./${selection.replace(" Settings", "")}Settings.js`).default({
      type: selection,
      ...rest,
    })}
  </Fragment>
);

const mapStateToProps = (state) => ({
  selection: state.option.selection,
  structure: state.structure,
  settings: state.settings,
});

export default connect(mapStateToProps)(Settings);
