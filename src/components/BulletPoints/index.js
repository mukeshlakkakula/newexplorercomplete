import React from "react";
import "./index.css";
import { FaCheckCircle } from "react-icons/fa";
import bpoints from "./bullet.json";
const BulletPoints = () => {
  const bulletPointOf = bpoints.map((each) => (
    <div className="bulletContainer">
      <div>
        <FaCheckCircle className="faIcon" />
      </div>

      <h1 className="bulletText">{each.important}</h1>
    </div>
  ));
  return <div>{bulletPointOf}</div>;
};

export default BulletPoints;
