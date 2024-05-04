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
    <div className="navbar-parent-container">
      <div className="logo">
        <NavLink className="nav-item" to="/">
          <span className="socio-header">Socio</span>
          <span className="gram-header">Gram</span>
          {/* <img
            src="https://lh3.googleusercontent.com/a/AAcHTtcUFk9bay7inQlBufdbe8egoYkJatoMsZLIL9JX1JRvjQ=s192-c-mo"
            style={{ width: 40, height: 40, borderRadius: 400 / 2 }}
            alt=""
          /> */}
        </NavLink>
      </div>
      <div className="menubar-container">
        {token && (
          <NavLink className="nav-item-user" to="/">
            {" "}
            {userInfo?.firstname}
          </NavLink>
        )}

        {token && (
          <NavLink className="nav-item" to="/login">
            {" "}
            <FiLogOut size={20} onClick={logouthandler} />
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
