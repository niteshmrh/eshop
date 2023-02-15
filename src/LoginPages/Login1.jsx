import React from "react";
import "./Login.css";
// import Header from "../Ecommerce/Header";
import { useNavigate } from "react-router-dom";

function Login1(props) {
  const navigate = useNavigate();

  return (
    <div className="Login-header">
      {/* <Header /> */}
      <div className="login-page">
        <div className="login-image">
          <img src="https://demo.dashboardmarket.com/strikingdash-react/static/media/Illustration.8601c8b7e9e046c9ee6f.png" />
        </div>
        <div className="login-form">
          <form>
            <h2>
              Sign in to <span style={{ color: "pink" }}>Admin</span>
            </h2>

            <div className="form-group-email">
              <label>Username or Email Address</label>
              <input type="email" className="blanks" />
            </div>

            <div className="form-group-password">
              <label>Password</label>
              <input type="password" className="blanks" />
            </div>

            <div className="sub-button">
              <button type="submit" onClick={() => navigate("/home")}>
                Submit
              </button>
            </div>
            <div className="reg-button">
              <button type="submit" onClick={() => navigate("/registration")}>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login1;
