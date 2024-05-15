import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./index.css";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geoLocation: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate("/paynow");
  };

  const setCredentialsOf = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div className="p-3 d-flex justify-content-center">
      <div className="insideConainer ">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="userName" className="form-label txtClr">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              id="userName"
              required
              onChange={setCredentialsOf}
              name="name"
              value={credentials.name}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label txtClr">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              required
              value={credentials.email}
              onChange={setCredentialsOf}
            />
            <div id="emailHelp" className="form-text txtClr">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label txtClr"
            >
              Phone Number
            </label>
            <input
              type="tel"
              pattern="[0-9]{10}"
              placeholder="1234567890"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              required
              value={credentials.password}
              onChange={setCredentialsOf}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onSubmit={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
