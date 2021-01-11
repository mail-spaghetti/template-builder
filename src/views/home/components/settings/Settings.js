import React, { Fragment } from "react";
import { connect } from "react-redux";

const Settings = ({ type, ...rest }) => (
  <Fragment>
    {require(`./${type.replace(" Settings", "")}Settings.js`).default({
      type,
      ...rest,
    })}
  </Fragment>
);

const mapStateToProps = (state) => ({
  type: state.option.type,
  structure: state.structure,
  settings: state.settings,
});

export default connect(mapStateToProps)(Settings);
