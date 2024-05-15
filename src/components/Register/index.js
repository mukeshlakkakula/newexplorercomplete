import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
const Register = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="w-100 d-flex flex-column align-items-center mt-2 justify-content-center">
      <div
        className="d-flex justify-content-center flex-column"
        style={{ gap: "10px" }}
      >
        <Link className="content" to="/register-form">
          <div
            className={`shaking-container  outerRegisterContainer ${
              isHovered ? "paused" : ""
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div>
              <span className="">
                <span className="">
                  Launch Your Own Tourism Business with{" "}
                  <font size="-1">
                    (Only <s>Rs 2000</s>{" "}
                    <span className={` ${isHovered ? "spn" : ""}`}>
                      Rs 99/-
                    </span>{" "}
                    )
                  </font>{" "}
                  Investment
                  <br />
                </span>
              </span>
            </div>
          </div>{" "}
        </Link>
        <h5
          style={{
            color: "#000",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "15px",
          }}
        >
          Register before{" "}
          <span style={{ color: "#e69b2f", fontWeight: "bold" }}>
            {" "}
            May 10, 2024{" "}
          </span>
          to unlock bonuses worth{" "}
          <span style={{ color: "#e69b2f", fontWeight: "bold" }}>
            {" "}
            ₹ 12,000{" "}
          </span>
        </h5>
      </div>
    </div>
  );
};

export default Register;
