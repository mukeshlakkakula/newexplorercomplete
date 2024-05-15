import React from "react";
import "./index.css";
import checkText from "./check.json";
import Register from "../Register";
const CheckboxList = () => {
  const checkboxContainers = checkText.map((each) => (
    <div className="CheckBoxTextContainer">
      <div>
        <input type="checkbox" className="checkBoxInput" />
      </div>

      <div>
        <h4 className="htext">{each.checkInfo}</h4>
      </div>
    </div>
  ));
  return (
    <div>
      <div className="checkboxInnerContainer">
        <h1 className="checkHead">
          Please Check All Boxes Where Your Answer Is YES!
        </h1>
        {checkboxContainers}
        <h4 style={{ color: "#000" }}>
          If you checked ANY of the boxes above, then you’re invited to join the
          <span
            style={{
              color: "#FF0000",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
          >
            {" "}
            Tourism Business Workshop.
          </span>
        </h4>
        {<Register />}
      </div>
      <div className="moreContainer">
        More than 20,000 Businesses have called it the best way to learn Tourism
        Business & grow Faster!
      </div>
    </div>
  );
};

export default CheckboxList;
