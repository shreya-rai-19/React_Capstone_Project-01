import React, { useState, useRef } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "../styles/Timer.css";
import audioFile from "../images/iphone_timer_sound.mp3";

const TimerComponent = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const audioRef = useRef(null);

  const handleDecrease = (field) => {
    switch (field) {
      case "hours":
        setHours(hours - 1);
        break;
      case "minutes":
        setMinutes(minutes - 1);
        break;
      case "seconds":
        setSeconds(seconds - 1);
        break;
      default:
        break;
    }
  };

  const handleIncrease = (field) => {
    switch (field) {
      case "hours":
        setHours(hours + 1);
        break;
      case "minutes":
        setMinutes(minutes + 1);
        break;
      case "seconds":
        setSeconds(seconds + 1);
        break;
      default:
        break;
    }
  };

  const handleSetTimer = () => {
    if (!isTimerRunning) {
      // Start the timer
      setIsTimerRunning(true);
    } else {
      // Stop the timer
      setIsTimerRunning(false);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    }
  };
  const totalDuration = hours * 3600 + minutes * 60 + seconds;

  return (
    <div className="timer-container">
      <div className="timer-display">
        {isTimerRunning && (
          <CountdownCircleTimer
            isPlaying={isTimerRunning}
            duration={totalDuration}
            colors={["#FF6A6A", "#F7B801", "#A30000", "#A30000"]}
            rotation="counterclockwise"
            trailColor="#191E39"
            strokeWidth={7}
            trailStrokeWidth={7}
            onComplete={() => {
              setIsTimerRunning(false);
              audioRef.current.play();
              setHours(0);
              setMinutes(0);
              setSeconds(0);
            }}
          >
            {({ remainingTime }) => (
              <div className="timer-label">
                {Math.floor(remainingTime / 3600)
                  .toString()
                  .padStart(2, "0")}
                :
                {Math.floor((remainingTime % 3600) / 60)
                  .toString()
                  .padStart(2, "0")}
                :{(remainingTime % 60).toString().padStart(2, "0")}
              </div>
            )}
          </CountdownCircleTimer>
        )}
      </div>
      <audio ref={audioRef} src={audioFile} />

      <div className="right-timer">
        <div className="timer-time-container">
          <div className="time-hours">
            <p className="timer-text">Hours</p>
            <button
              className="increase"
              onClick={() => handleIncrease("hours")}
            ></button>
            <span className="time-value">{String(hours).padStart(2, "0")}</span>
            <button
              className="decrease"
              onClick={() => handleDecrease("hours")}
            ></button>
          </div>
          <div className="colon">:</div>
          <div className="time-mins">
            <p className="timer-text">Minutes</p>
            <button
              className="increase"
              onClick={() => handleIncrease("minutes")}
            ></button>
            <span className="time-value">
              {String(minutes).padStart(2, "0")}
            </span>
            <button
              className="decrease"
              onClick={() => handleDecrease("minutes")}
            ></button>
          </div>
          <div className="colon">:</div>
          <div className="time-secs">
            <p className="timer-text">Seconds</p>
            <button
              className="increase"
              onClick={() => handleIncrease("seconds")}
            ></button>
            <span className="time-value">
              {String(seconds).padStart(2, "0")}
            </span>
            <button
              className="decrease"
              onClick={() => handleDecrease("seconds")}
            ></button>
          </div>
        </div>

        <button className="start-Stop" onClick={handleSetTimer}>
          {isTimerRunning ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default TimerComponent;
