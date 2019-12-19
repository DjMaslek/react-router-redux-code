import React from "react";
import { connect } from "react-redux";
import { Profile } from "../component/Profile";
import { getProfile } from "../actions/ProfileActions";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  render() {
    const { profile, getProfile } = this.props;
    return (
      <Profile
        getProfile={getProfile}
        data={profile.data}
        isFetching={profile.isFetching}
        errorMsg={profile.errorMsg}
      />
    );
  }
}

const mapStateToProps = store => {
  return {
    profile: store.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProfile: () => dispatch(getProfile())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
);
