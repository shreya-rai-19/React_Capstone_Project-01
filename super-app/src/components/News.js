// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../styles/News.css"; // Import the custom CSS

// const News = () => {
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     // Make an API request to get news data
//     axios
//       .get(
//         "https://newsapi.org/v2/top-headlines?country=us&apiKey=0ef9bc267b5d444eb7794bea4e4ce1a3"
//       )
//       .then((response) => {
//         setNews(response.data.articles);
//       })
//       .catch((error) => {
//         console.error("Error fetching news:", error);
//       });
//   }, []);

//   return (
//     <div className="news-container">
//       <h1>Top Headlines</h1>
//       {news.map((article, index) => (
//         <div key={index} className="news-article">
//           <img src={article.urlToImage} alt={article.title} />
//           <div className="article-details">
//             <p>Date: {new Date(article.publishedAt).toLocaleDateString()}</p>
//             <p>Time: {new Date(article.publishedAt).toLocaleTimeString()}</p>
//           </div>
//           <h2>{article.title}</h2>
//           <p>{article.description}</p>
//           <a href={article.url} target="_blank" rel="noopener noreferrer">
//             Read more
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default News;


import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/News.css";

const News = () => {
  const [currentNews, setCurrentNews] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=0ef9bc267b5d444eb7794bea4e4ce1a3"
      )
      .then((response) => {
        const articles = response.data.articles;
        const now = new Date();

        // Find the first article with a published date and time less than or equal to the current date and time
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
        <div className="news-article">
          <img src={currentNews.urlToImage} alt={currentNews.title} />
          <div className="article-details">
            <p>Date: {new Date(currentNews.publishedAt).toLocaleDateString()}</p>
            <p>Time: {new Date(currentNews.publishedAt).toLocaleTimeString()}</p>
          </div>
          <h2>{currentNews.title}</h2>
          <p>{currentNews.description}</p>
          <a href={currentNews.url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </div>
      )}
    </div>
  );
};

export default News;
