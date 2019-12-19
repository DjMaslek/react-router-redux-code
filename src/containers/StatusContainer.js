import React from "react";
import { connect } from "react-redux";
import { logOut } from "../actions/LoginActions";
import { withRouter } from "react-router-dom";
import Status from "../component/Status";

class StatusContainer extends React.Component {
  render() {
    const { logOut } = this.props;
    return <Status logOut={logOut} />;
  }
}

const mapStateToProps = store => {
  return {
    login: store.login
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StatusContainer)
);
