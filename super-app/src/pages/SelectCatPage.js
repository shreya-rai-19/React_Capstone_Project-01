import React, { useState, useEffect } from "react";
import Cards_Category from "../components/Cards_Category";
import "../styles/SelectCatPage.css";
import cross from "../images/X.png";
import erroricon from "../images/Error_Icon.png";
import { useNavigate } from "react-router-dom";

const SelectCatPage = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [selectedCardNames, setSelectedCardNames] = useState([]);
  const [error, setError] = useState("");

  const cardData = [
    {
      id: 1,
      image: require("../images/action.png"),
      heading: "Action",
      backgroundColor: "#FF5209",
    },
    {
      id: 2,
      image: require("../images/drama.png"),
      heading: "Drama",
      backgroundColor: "#D7A4FF",
    },
    {
      id: 7,
      image: require("../images/romance.png"),
      heading: "Romance",
      backgroundColor: "#148A08",
    },
    {
      id: 8,
      image: require("../images/thriller.png"),
      heading: "Thriller",
      backgroundColor: "#84C2FF",
    },
    {
      id: 9,
      image: require("../images/western.png"),
      heading: "Western",
      backgroundColor: "#902500",
    },
    {
      id: 5,
      image: require("../images/horror.png"),
      heading: "Horror",
      backgroundColor: "#7358FF",
    },
    {
      id: 3,
      image: require("../images/fantasy.png"),
      heading: "Fantasy",
      backgroundColor: "#FF4ADE",
    },
    {
      id: 6,
      image: require("../images/music.png"),
      heading: "Music",
      backgroundColor: "#E61E32",
    },
    {
      id: 4,
      image: require("../images/fiction.png"),
      heading: "Fiction",
      backgroundColor: "#6CD061",
    },
  ];

  const toggleCardSelection = (cardId) => {
    setSelectedCards((prevSelectedCards) => {
      if (prevSelectedCards.includes(cardId)) {
        return prevSelectedCards.filter((id) => id !== cardId);
      } else {
        return [...prevSelectedCards, cardId];
      }
    });
  };

  React.useEffect(() => {
    const names = cardData
      .filter((card) => selectedCards.includes(card.id))
      .map((selectedCard) => selectedCard.heading);

    setSelectedCardNames(names);
  }, [selectedCards, cardData]);

  useEffect(() => {
    if (selectedCardNames.length >= 3) {
      setError("");
    }
  }, [selectedCardNames]);

  useEffect(() => {
    localStorage.setItem("selectedCategories", JSON.stringify(selectedCardNames));
  }, [selectedCardNames]);
  
  const navigate = useNavigate();

  const validateSelection = () => {
    if (selectedCardNames.length < 3) {
      setError("Minimum 3 category required");
    } else {
      navigate("./homepage");
    }
  };

  const removeSelectedCard = (cardName) => {
    setSelectedCardNames((prevSelectedCardNames) => {
      return prevSelectedCardNames.filter((name) => name !== cardName);
    });
    setSelectedCards((prevSelectedCards) => {
      return prevSelectedCards.filter(
        (cardId) =>
          cardData.find((card) => card.heading === cardName).id !== cardId
      );
    });
  };

  return (
    <div className="cat_main">
      <div className="selected-card-names">
        <div className="heading-super">
          <label>Super app</label>
        </div>
        <br />
        <div className="heading-text ">
          <label>Choose your entertainment category</label>
        </div>

        <div className="names-list">
          {selectedCardNames.length > 0 && (
            <div className="sel">
              {selectedCardNames.map((name, index) => (
                <li key={index}>
                  {name}{" "}
                  <img
                    src={cross}
                    alt="cross"
                    className="cross_img"
                    onClick={() => removeSelectedCard(name)}
                  />
                </li>
              ))}
            </div>
          )}

          {error && (
            <div className="error">
              {" "}
              <img
                src={erroricon}
                alt="erroricon"
                className="error_icon"
              />{" "}
              {error}{" "}
            </div>
          )}
        </div>
      </div>

      <div className="card-container">
        <div className="cards-list">
          {cardData.map((card) => (
            <Cards_Category
              key={card.id}
              image={card.image}
              heading={card.heading}
              isSelected={selectedCards.includes(card.id)}
              backgroundColor={card.backgroundColor}
              onClick={() => toggleCardSelection(card.id)}
            />
          ))}
        </div>

        <button onClick={validateSelection} className="green_btn">
          Next Page
        </button>
      </div>
    </div>
  );
};

export default SelectCatPage;
