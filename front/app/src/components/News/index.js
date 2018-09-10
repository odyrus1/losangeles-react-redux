// Import
import React from 'react';

// Local import

// Code
class News extends React.Component {
  render() {
    return (
      <div>
        <div className="news-container">

          { this.props.news ? this.props.news.map((news, index) => (
            <div className="singleNews-container" key={index}>
              <img src={news.news_image} alt="news-image" />
              <h1>{news.news_title}</h1>
              <p>{news.news_content}</p>
            </div>
          )) : null }

        </div>
      </div>
    )
  }
}

// Export
export default News;
