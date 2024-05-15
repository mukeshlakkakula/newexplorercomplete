import React from "react";
import "./index.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [activeRoute, setActiveRoute] = useState("");
  const head = (
    <div className="headerContainner">
      <div>
        <Link
          to="/"
          onClick={() => {
            setActiveRoute("home");
          }}
        >
          <img
            className="imgLogo"
            src="https://s3-alpha-sig.figma.com/img/705d/2c88/24da71f85c85e5365eb9047a7411a85d?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oz9bCVFbIghc6K095dNwBDyxi8cJr86tQvVtSZdRwfxlJVgwTeItitMbKH-XyQZo3lUv--jXVuC7RuOXKu2agzkQxMh9mINpVI43ntnCppm0boFzsw-8Y2uscmTBuXAQa-e8foZinguPfhpw0myC3vXr53fzx7S8X7INVWCAboGBPSjAihEhXq57CeE1g95ToX-Ajc1GDJK5nAC1EpqdlnG14MrWqhZU-s2DhyPG8CjeM1MnRCiSgErW9nuUdcZEEF6m2~jZD6twLyDZvwa7AiSYrgwK9X7E87~FzquUCxMnyFQK~aUInWOqKkfyXgjc5AaiE5z3x9z86bZk21SbGA__"
            alt="Logo"
          />
        </Link>
      </div>
      <div className="navContainer">
        <Link to="/">
          <button
            className={activeRoute === "home" ? "activeBtn" : "notActiveBtn"}
            value="home"
            onClick={() => {
              setActiveRoute("home");
            }}
          >
            Home
          </button>
        </Link>

        <Link to="/register-form">
          <button
            className="btn btn-danger"
            value="RegisterForm"
            onClick={() => {
              setActiveRoute("RegisterForm");
            }}
          >
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
  return <div>{head}</div>;
};

export default Header;
