import React from "react";
import { Redirect } from "react-router-dom";

export class Profile extends React.Component {
  componentDidMount() {
    const { getProfile } = this.props;
    getProfile();
    console.log();
  }

  render() {
    const { isFetching, errorMsg } = this.props;
    let data = this.props.data || {};
    const isLogg = localStorage.getItem("isLogged");
    let profileTemplate = data.map(function(item) {
      return (
        <div key={item.userId}>
          <h3>City:</h3>
          <p>{item.city}</p>
          <div>
            <h3>Languages: </h3>
            {item.languages.map(function(language, index) {
              return <p key={index}>{language}</p>;
            })}
          </div>
          <div>
            <h3>Socials:</h3>
            {item.social.map(function(socials, index) {
              return (
                <p key={index}>
                  <a href={socials.link}>
                    <i className={socials.label + "-ico icon"}></i>
                  </a>
                </p>
              );
            })}
          </div>
        </div>
      );
    });

    if (!isLogg) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="profile">
        <h2 className="header">Profile</h2>
        {isFetching ? <p>Loading...</p> : profileTemplate}
        {errorMsg && <p className="err">{errorMsg}</p>}
      </div>
    );
  }
}
