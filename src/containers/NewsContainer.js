import React from "react";
import { connect } from "react-redux";
import { News } from "../component/News";
import { withRouter } from "react-router-dom";
import { getNews } from "../actions/NewsActions";

class NewsContainer extends React.Component {
  render() {
    const { news, getNews } = this.props;
    return (
      <News
        getNews={getNews}
        data={news.data}
        isFetching={news.isFetching}
        errorMsg={news.errorMsg}
      />
    );
  }
}

const mapStateToProps = store => {
  return {
    news: store.news
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNews: () => dispatch(getNews())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NewsContainer)
);
