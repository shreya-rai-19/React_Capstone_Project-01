import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Entertainment.css";
import logoimage from "../images/user_pic_logo.png";
import { useNavigate } from "react-router-dom";

const apiKey = "32a84b300bc0df3f77dfd949d599ae50";

const genreIds = {
  Action: 28,
  Drama: 18,
  Romance: 10749,
  Thriller: 53,
  Western: 37,
  Horror: 27,
  Fantasy: 14,
  Music: 10402,
  Fiction: 878,
};

const BrowsePage = () => {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/category/homepage/");
  };
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const storedCategories =
      JSON.parse(localStorage.getItem("selectedCategories")) || [];
    setSelectedCategories(storedCategories);
  }, []);

  const [moviesByCategory, setMoviesByCategory] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const categoryData = {};
      for (const category of selectedCategories) {
        try {
          const genreId = genreIds[category];
          const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`;
          const response = await axios.get(apiUrl);

          categoryData[category] = response.data.results.slice(0, 5);
        } catch (error) {
          console.error(`Error fetching data for ${category}:`, error);
        }
      }
      setMoviesByCategory(categoryData);
    };

    fetchData();
  }, [selectedCategories]);

  return (
    <div className="browse-container">
      <div className="browse-top">
        <div className="logo">Super App</div>
        <div className="profile-home-icon">
          <button onClick={handleHomeClick} className="home-btn">
            <img src={logoimage} alt="logo-image" />
          </button>
        </div>
      </div>

      <div className="browse-movies">
        <p className="browse-heading">Entertainment according to your choice</p>
        {selectedCategories.map((category) => (
          <div key={category}>
            <p className="category_name">{category}</p>
            <div className="movies-row">
              {moviesByCategory[category] &&
                moviesByCategory[category].map((movie) => (
                  <div key={movie.id} className="movie-card">
                    <img
                      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                      alt={movie.title}
                    />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowsePage;
