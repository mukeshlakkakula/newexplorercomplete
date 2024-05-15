import React, { useState, useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";
const SpecialDesignedFor = () => {
  const [minutes, setMinutes] = useState(60);
  const [seconds, setSeconds] = useState(0);
  const [timerFinished, setTimerFinished] = useState(false);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(countdown);
          setTimerFinished(true);
          // Timer has reached 0, perform any action needed here
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="specialContainer">
      <div className="specialmainContainer">
        <div className="priceContainer">
          <p className="specP001">Price increases in</p>
          <p className="specP001">
            {formatTime(minutes)} min{" "}
            <span className="timer">{formatTime(seconds)}</span> sec
          </p>
        </div>
        <div className="priceContainer">
          <h1 className="specH1">
            <span className="s2000">₹2000</span> ₹99
          </h1>
          <Link type="button" className="btn btn-danger" to="/register-form">
            Register Now
          </Link>
          <p className="specP1">100% Money Back Guarantee</p>
        </div>
      </div>
      {timerFinished && (
        <div className="bomb-blast-animation">
          <div className="bomb"></div>
          <div className="blast"></div>
        </div>
      )}
    </div>
  );
};

export default SpecialDesignedFor;
