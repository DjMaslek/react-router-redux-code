import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewsContainer from "./containers/NewsContainer";
import LoginContainer from "./containers/LoginContainer";
import ProfileContainer from "./containers/ProfileContainer";
import StatusContainer from "./containers/StatusContainer";
import Home from "./component/Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navigation">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </nav>

          <StatusContainer />

          <Switch>
            <Route path="/news">
              <NewsContainer />
            </Route>
            <Route path="/login">
              <LoginContainer />
            </Route>
            <Route path="/profile">
              <ProfileContainer />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
function NotFoundPage() {
  return <h2 className="header">NotFound</h2>;
}

/* const mapStateToProps = store => {
  console.log(store);
  return {
    login: store.login,
    profile: store.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleLoginAction: (credentials, onSuccess, onFailure) =>
      dispatch(handleLogin(credentials, onSuccess, onFailure)),
    getProfileAction: () => dispatch(getProfile())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
 */
export default App;
