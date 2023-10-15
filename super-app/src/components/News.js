import React, { useState, useEffect } from "react";
import "../styles/News.css";
import { useNavigate } from "react-router-dom";

const News = () => {
  const [currentNews, setCurrentNews] = useState(null);

  const navigate = useNavigate();
  const handleBrowseClick = () => {
    navigate('/category/homepage/entertainment');
  };
  useEffect(() => {
    const apiKey = "0ef9bc267b5d444eb7794bea4e4ce1a3";
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const articles = data.articles;
        const now = new Date();

        const matchingNews = articles.find((article) => {
          const articleDate = new Date(article.publishedAt);
          return articleDate <= now;
        });

        setCurrentNews(matchingNews);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);

  return (
    <div className="news-container">
      {currentNews && (
        <>
          <div className="top-news">
            <div className="img-news">
              <img src={currentNews.urlToImage} alt={currentNews.title} />
              <div className="img-overlay"></div>
              <div className="news-details">
                <div className="news-title">{currentNews.title}</div>
                <div className="date-time-news">
                  {new Date(currentNews.publishedAt).toLocaleDateString()}
                  &nbsp;&nbsp;| &nbsp;
                  {new Date(currentNews.publishedAt).toLocaleTimeString()}
                </div>
              </div>
            </div>
          </div>

          <div className="bottom-news">
            <div className="news-text">{currentNews.description}</div>
          </div>
          <button onClick={handleBrowseClick} className="green_btn1">Browse</button>
        </>
      )}
    </div>
  );
};

export default News;
