import React from "react";

export class News extends React.Component {
  componentDidMount() {
    const { getNews } = this.props;
    getNews();
    console.log();
  }

  render() {
    const { isFetching, errorMsg } = this.props;
    let data = this.props.data || {};
    let NewsTemplate = data.map(function(item) {
      return (
        <div className="news-block" key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      );
    });

    return (
      <div className="news">
        <h2 className="header">News</h2>
        {isFetching ? <p>Loading...</p> : NewsTemplate}
        {errorMsg && <p className="err">{errorMsg}</p>}
      </div>
    );
  }
}
