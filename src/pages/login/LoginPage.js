import React, { useContext, useState } from "react";
import { AuthKey } from "../../context/AuthContext";
import "./LoginPage.css";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
const LoginPage = () => {
  const { loginhandler, logouthandler } = useContext(AuthKey);
  const [userLoginInfo, setUserLoginInfo] = useState({
    username: "",
    password: "",
  });
  const userGuest = { username: "adarshbalika", password: "adarshBalika123" };
  const loginDetailSetter = (e) => {
    setUserLoginInfo((userLoginInfo) => ({
      ...userLoginInfo,
      [e.target.name]: e.target.value,
    }));
    console.log(userLoginInfo);
  };
  const loginGuestHandler = (e) => {
    e.preventDefault();
    loginhandler(userGuest);
    // setUserLoginInfo(userGuest)
  };
  const logoutGuestHandler = () => {
    logouthandler(userGuest);
  };
  const loginButtonHandler = (e) => {
    e.preventDefault();
    const { username, password } = userLoginInfo;
    if (username.length <= 0 || password.length <= 0) {
      toast("Fill username and password");
    } else {
      loginhandler(userLoginInfo);
    }
  };
  // const preventData = (e) => {
  //   e.preventDefault()
  //   console.log(1)
  //   loginButtonHandler()
  // }

  return (
    <div className="parent-login-container">
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form">
          <div className="form-group">
            {/* <label for="username">Username:</label> */}
            <input
              type="text"
              placeholder="username"
              name="username"
              onChange={loginDetailSetter}
            />
          </div>
          <div className="form-group">
            {/* <label for="password">Password:</label> */}
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={loginDetailSetter}
            />
          </div>
          <div className="form-group-btns">
            <button type="submit" onClick={loginButtonHandler}>
              Login{" "}
            </button>
            <button type="submit" onClick={loginGuestHandler}>
              Login As Guest
            </button>
            
          </div>
          <div className="form-group">
            <NavLink to="/signup" className="link">
              {" "}
              Create a New Account ? Signup{" "}
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
