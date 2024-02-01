import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { AuthKey } from "../../context/AuthContext";
import { FiLogOut } from "react-icons/fi";
const Header = () => {
  const {
    token,
    logouthandler,
    state: { userInfo },
  } = useContext(AuthKey);
  return (
    <div className="navbar">
      <div className="logo">
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-item-active" : "nav-item"
          }
          to="/"
        >
          <img
            src="https://lh3.googleusercontent.com/a/AAcHTtcUFk9bay7inQlBufdbe8egoYkJatoMsZLIL9JX1JRvjQ=s192-c-mo"
            style={{ width: 40, height: 40, borderRadius: 400 / 2 }}
            alt=""
          />
        </NavLink>
      </div>
      <div className="menubar">
        {token && (
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-item-active" : "nav-item"
            }
            to="/"
          >
            {" "}
            {userInfo?.firstname}
          </NavLink>
        )}

        {token && (
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-item-active" : "nav-item"
            }
            to="/login"
          >
            {" "}
            <FiLogOut onClick={logouthandler} />
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
