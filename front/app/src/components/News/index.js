// Import
import React from 'react';

// Local import

// Code
function News(props){

    const news =  props.news ?
      props.news.map((news, index) => (
        <div className="singleNews-container" key={index}>
          <img src={news.news_image} alt="news-image" />
          <h1>{news.news_title}</h1>
          <p>{news.news_content}</p>
        </div>
      ))
    :
      null

    return (
      <div>
        <div className="news-container">
          {news}
        </div>
      </div>
    )
}

// Export
export default News;
