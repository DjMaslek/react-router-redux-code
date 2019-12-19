import React from "react";
import { Redirect } from "react-router-dom";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    redirecting: false
  };

  onBtnClickHandler = e => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.handleLogin(
      {
        email: username,
        password: password
      },
      () => {
        this.setState({ redirecting: true });
        localStorage.setItem("isLogged", true);
      },
      () => {
        this.setState({
          username: "",
          password: ""
        });
      }
    );
  };
  handleNameChange = e => {
    this.setState({ username: e.currentTarget.value });
  };
  handlePassChange = e => {
    this.setState({ password: e.currentTarget.value });
  };

  renderTemplate = () => {};

  render() {
    const { username, password } = this.state;
    const { errorMsg, isFetching } = this.props;
    const isLogg = localStorage.getItem("isLogged");
    if (isLogg) {
      return <Redirect to="/profile" />;
    }

    return (
      <form className="login-form">
        <input
          type="email"
          name="username"
          placeholder="Username"
          value={username}
          onChange={this.handleNameChange}
        />
        <input
          type="password"
          name="pass"
          placeholder="Password"
          value={password}
          onChange={this.handlePassChange}
        />
        {isFetching ? (
          <button className="login-btn" disabled="disbled">
            Loading...
          </button>
        ) : (
          <button className="login-btn" onClick={this.onBtnClickHandler}>
            Log in
          </button>
        )}
        {/* <button className="login-btn" onClick={this.onBtnClickHandler}>
          Log in
        </button> */}
        {errorMsg && <p className="err">{errorMsg}</p>}
      </form>
    );
  }
}
