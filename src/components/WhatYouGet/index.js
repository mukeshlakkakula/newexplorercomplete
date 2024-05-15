import React from "react";
import "./index.css";
import details from "./index.json";
import Register from "../Register";
const WhatYouGet = () => {
  const detailOfWotkshop = details.map((each) => (
    <div className="whatLoopContainer">
      <div className="imageP1">
        <img className="imageWhat" src={each.image} alt="images" />
      </div>
      <div>
        <h1 className="topicH1">{each.topic}</h1>
        <p className="pointP">{each.point01}</p>
        <p className="pointP">{each.point02}</p>
      </div>
    </div>
  ));
  return (
    <div className="fullWhatContainer">
      <div>
        <h4 className="topHead">Here is what you are going to learn... </h4>
      </div>
      <div>{detailOfWotkshop}</div>
      <Register />
    </div>
  );
};

export default WhatYouGet;
