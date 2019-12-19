import React from "react";
import { Link } from "react-router-dom";

export default class ProfileStatus extends React.Component {
  handleLogOutClick = () => {
    const { logOut } = this.props;
    logOut();
  };
  render() {
    const isLogged = localStorage.getItem("isLogged");
    return (
      <div className="profile-status">
        {isLogged ? (
          <span className="status" onClick={this.handleLogOutClick}>
            Log out
          </span>
        ) : (
          <Link to="/login" className="status">
            Log in
          </Link>
        )}
      </div>
    );
  }
}
