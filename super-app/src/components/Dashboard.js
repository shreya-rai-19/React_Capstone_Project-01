import React from "react";
import ProfileCard from "./ProfileCard";
import Notes from "./Notes";
import News from "./News";
import Weather from "./Weather";
import Timer from "./Timer";
import TimerComponent from "./TimerComponent";
import "../styles/Dashboard.css";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="left-dashboard">
        <div className="top">
          <div className="top-left">
            <div className="profile-section">
              <ProfileCard />
            </div>
            <div className="weather-section">
              <Weather />
            </div>
          </div>
          <div className="top-right">
            <div className="notes-section">
              <Notes />
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="timer-section">
            {/* <Timer /> */}
            <TimerComponent />
          </div>
        </div>
      </div>
      <div className="right-dashboard">
        <div className="news-section">
          <News />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
