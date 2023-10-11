import React, { useEffect, useState } from "react";
import userpic from "../images/user_img.png";
import "../styles/Profile.css";

function ProfileCard() {
  const [userData, setUserData] = useState({});
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("registrationData"));
    if (storedUserData) {
      setUserData(storedUserData);
    }
    const storedSelectedCategories = JSON.parse(
      localStorage.getItem("selectedCategories")
    );
    if (storedSelectedCategories) {
      setSelectedCategories(storedSelectedCategories);
    }
  }, []);

  return (
    <div className="profile-card">
      <div>
        <img className="profile-image" src={userpic} alt="User's Profile" />
      </div>
      <div className="profile-info">
        <p>{userData.name}</p>
        <p>{userData.email}</p>
        <p className="username-p">{userData.username}</p>
        <div className="selected-categories-list">
          <ul className="lists">
            {selectedCategories.map((category, index) => (
              <li className="li-keys" key={index}>
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
