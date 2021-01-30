import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ScrollTop extends Component {
  componentDidMount = () => {
    const unlisten = this.props.history.listen(() => window.scrollTo(0, 0));
  };

  componentWillUnmount = () => unlisten();
  render() {
    return null;
  }
}

export default withRouter(ScrollTop);
