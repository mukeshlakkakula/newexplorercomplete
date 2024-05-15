import React from "react";
import "./index.css";
import bonuses from "./index.json";
import Register from "../Register";
const Bonuses = () => {
  const BonusCards = bonuses.map((each) => (
    <div className="BonusCardContainer">
      <div>
        <h1 className="BonusCardHead">Bonus {each.bonusCount}</h1>
      </div>
      <div className="imgContainer">
        <img className="imgContainer" src={each.imageOf} alt="bonusImg" />
      </div>

      <p className="bonusCardDes">{each.Description}</p>
      <div>
        <p className="BonusWorthP">Worth Rs {each.worth}</p>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="BonusHeadContainer">
        <h1 className="BonusHE1">Register before midnight of 10 May 2024</h1>
        <p className="BonusP1">To Unlock All Bonuses worth Rs 12,000</p>
      </div>
      <div>{BonusCards}</div>
      <Register />
    </div>
  );
};

export default Bonuses;
