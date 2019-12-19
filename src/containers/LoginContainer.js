import React from "react";
import { connect } from "react-redux";
import { Login } from "../component/Login";
import { handleLogin } from "../actions/LoginActions";
import { withRouter } from "react-router-dom";

class LoginContainer extends React.Component {
  render() {
    const { login, handleLogin } = this.props;
    return (
      <Login
        errorMsg={login.errorMsg}
        handleLogin={handleLogin}
        isFetching={login.isFetching}
      />
    );
  }
}

const mapStateToProps = store => {
  return {
    login: store.login
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: (credentials, onSuccess, onFailure) =>
      dispatch(handleLogin(credentials, onSuccess, onFailure))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
);
