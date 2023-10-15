// import React, { Component } from 'react';
// import 'react-circular-progressbar/dist/styles.css';
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import audioFile from '../images/iphone_timer_sound.mp3';
// import "../styles/Timer.css";

// class Timer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hours: 0,
//       minutes: 0,
//       seconds: 0,
//       isRunning: false,
//       timeRemaining: 0,
//     };
//     this.timerInterval = null;
//     this.audio = new Audio(audioFile);
//   }

//   handleTimeChange = (field, value) => {
//     this.setState({ [field]: value });
//   }

//   startTimer = () => {
//     const { hours, minutes, seconds } = this.state;
//     const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    
//     if (totalSeconds <= 0) {
//       alert('Please set a valid timer duration.');
//       return;
//     }

//     this.setState({ isRunning: true, timeRemaining: totalSeconds });

//     this.timerInterval = setInterval(() => {
//       if (this.state.timeRemaining > 0) {
//         this.setState((prevState) => ({ timeRemaining: prevState.timeRemaining - 1 }));
//       } else {
//         this.stopTimer();
//         this.audio.play();
//       }
//     }, 1000);
//   }

//   stopTimer = () => {
//     clearInterval(this.timerInterval);
//     this.setState({ isRunning: false, timeRemaining: 0 });
//   }

//   render() {
//     const { hours, minutes, seconds, isRunning, timeRemaining } = this.state;

//     return (
//       <div className="timer-container">
//         <div className="timer-circle">
//           <CircularProgressbar
//             value={timeRemaining}
//             maxValue={(hours * 3600 + minutes * 60 + seconds)}
//             text={`${hours}:${minutes}:${seconds}`}
//             circleWidth='200'
//           />
//         </div>
        // <div className="timer-controls">
        //   <div className='timer-time-container'>
        //     <div className='time-hours'>
        //       <p className='timer-text'>Hours</p>
        //       <button className="increase" onClick={() => this.handleTimeChange('hours', hours + 1)}></button>
        //       <input className="time-value" type="number" value={hours} onChange={e => this.handleTimeChange('hours', e.target.value)} />
        //       <button className="decrease" onClick={() => this.handleTimeChange('hours', hours - 1)}></button>
        //     </div>
        //     <div className='colon'>:</div>
        //     <div className='time-mins'>
        //     <p className='timer-text'> Minutes</p>
        //     <button className="increase" onClick={() => this.handleTimeChange('minutes', minutes + 1)}></button>
        //       <input className="time-value" type="number" value={minutes} onChange={e => this.handleTimeChange('minutes', e.target.value)} />
        //       <button className="decrease" onClick={() => this.handleTimeChange('minutes', minutes - 1)}></button>
        //     </div>
        //     <div className='colon'>:</div>
        //     <div className='time-secs'>
        //     <p className='timer-text'> Seconds</p>
        //     <button className="increase" onClick={() => this.handleTimeChange('seconds', seconds + 1)}></button>
        //       <input className="time-value" type="number" value={seconds} onChange={e => this.handleTimeChange('seconds', e.target.value)} />
        //       <button className="decrease" onClick={() => this.handleTimeChange('seconds', seconds - 1)}></button>
        //     </div>
        //   </div>

      //     <button className="start-Stop" onClick={isRunning ? this.stopTimer : this.startTimer}>
      //       {isRunning ? 'Stop' : 'Start'}
      //     </button>
      //   </div>
      // </div>
//     );
//   }
// }

// export default Timer;


import React, { Component } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
// import audioFile from '../images/iphone_timer_sound.mp3';
import "../styles/Timer.css";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      isRunning: false,
    };
    this.timerInterval = null;
    this.audio = new Audio('../images/iphone_timer_sound.mp3');
  }

  handleTimeChange = (field, value) => {
    this.setState({ [field]: value });
  }

  startTimer = () => {
    const { hours, minutes, seconds } = this.state;
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;

    if (totalSeconds <= 0) {
      alert('Please set a valid timer duration.');
      return;
    }

    this.setState({ isRunning: true });

    this.timerInterval = setInterval(() => {
      if (totalSeconds > 0) {
        this.setState((prevState) => ({ seconds: prevState.seconds - 1 }));
      } else {
        this.stopTimer();
        this.audio.play();
      }
    }, 1000);
  }

  stopTimer = () => {
    clearInterval(this.timerInterval);
    this.setState({ isRunning: false });
  }

  render() {
    const { hours, minutes, seconds, isRunning } = this.state;
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;

    return (
      <div className="timer-container">
        <div className="timer-controls">
          {/* <div className="time-inputs">
            <div>
              <button onClick={() => this.handleTimeChange('hours', hours + 1)}>+</button>
              <input type="number" value={hours} onChange={e => this.handleTimeChange('hours', e.target.value)} />
              <button onClick={() => this.handleTimeChange('hours', hours - 1)}>-</button>
            </div>
            <div>
              <button onClick={() => this.handleTimeChange('minutes', minutes + 1)}>+</button>
              <input type="number" value={minutes} onChange={e => this.handleTimeChange('minutes', e.target.value)} />
              <button onClick={() => this.handleTimeChange('minutes', minutes - 1)}>-</button>
            </div>
            <div>
              <button onClick={() => this.handleTimeChange('seconds', seconds + 1)}>+</button>
              <input type="number" value={seconds} onChange={e => this.handleTimeChange('seconds', e.target.value)} />
              <button onClick={() => this.handleTimeChange('seconds', seconds - 1)}>-</button>
            </div>
          </div> */}
          <div className='timer-time-container'>
            <div className='time-hours'>
              <p className='timer-text'>Hours</p>
              <button className="increase" onClick={() => this.handleTimeChange('hours', hours + 1)}></button>
              <input className="time-value" type="number" value={hours} onChange={e => this.handleTimeChange('hours', e.target.value)} />
              <button className="decrease" onClick={() => this.handleTimeChange('hours', hours - 1)}></button>
            </div>
            <div className='colon'>:</div>
            <div className='time-mins'>
            <p className='timer-text'> Minutes</p>
            <button className="increase" onClick={() => this.handleTimeChange('minutes', minutes + 1)}></button>
              <input className="time-value" type="number" value={minutes} onChange={e => this.handleTimeChange('minutes', e.target.value)} />
              <button className="decrease" onClick={() => this.handleTimeChange('minutes', minutes - 1)}></button>
            </div>
            <div className='colon'>:</div>
            <div className='time-secs'>
            <p className='timer-text'> Seconds</p>
            <button className="increase" onClick={() => this.handleTimeChange('seconds', seconds + 1)}></button>
              <input className="time-value" type="number" value={seconds} onChange={e => this.handleTimeChange('seconds', e.target.value)} />
              <button className="decrease" onClick={() => this.handleTimeChange('seconds', seconds - 1)}></button>
            </div>
          </div>
          <button onClick={isRunning ? this.stopTimer : this.startTimer}>
            {isRunning ? 'Stop Timer' : 'Start Timer'}
          </button>
        </div>

        <div className="timer-display">
          <CountdownCircleTimer
            isPlaying={isRunning}
            duration={totalSeconds}
            colors={[['#00FF00', 0.33]]}
          >
            {({ remainingTime }) => (
              <div className="timer">
                <div className="timer-text">
                  <div>{Math.floor(remainingTime / 3600).toString().padStart(2, '0')}</div>
                  <div>:</div>
                  <div>{Math.floor((remainingTime % 3600) / 60).toString().padStart(2, '0')}</div>
                  <div>:</div>
                  <div>{(remainingTime % 60).toString().padStart(2, '0')}</div>
                </div>
              </div>
            )}
          </CountdownCircleTimer>
        </div>
      </div>
    );
  }
}

export default Timer;
