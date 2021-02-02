import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";

const Settings = ({ selection, type, ...rest }) => {
  return (
    <Fragment>
      {require(`./${selection.replace(" Settings", "")}Settings.js`).default({
        type: type || selection,
        ...rest,
      })}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  selection: state.option.selection,
  type: state.option.type,
  component: state.component,
  structure: state.structure,
  settings: state.settings,
});

export default connect(mapStateToProps)(Settings);
