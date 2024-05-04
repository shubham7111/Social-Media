import React, { useContext, useEffect, useState } from "react";
import "./UserDetails.css";
import { UserKey } from "../../context/UserContext";
import { User } from "../user/User";
import { AuthKey } from "../../context/AuthContext";
export const UserDetails = () => {
  const [input, setInput] = useState("");
  const {
    getUser,
    state: { users },
  } = useContext(UserKey);
  const {
    state: { userInfo },
  } = useContext(AuthKey);
  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };
  let filteredUser = users?.filter((user) => user._id !== userInfo?._id);

  if (input.length > 0) {
    filteredUser = filteredUser.filter((user) =>
      user?.firstname?.toLowerCase().includes(input.toLowerCase())
    );
  }
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="user-container">
      <h3>Suggestions</h3>
      <div className="userdetails-child-1">
        <input
          type="search"
          name="usersearch"
          list="usersearch"
          placeholder="Search"
          onChange={inputChangeHandler}
        />
        <datalist id="usersearch">
          <option value="Shweta"></option>
          <option value="Alice"></option>
          <option value="Bob"></option>
          <option value="Emma"></option>
          <option value="Lily"></option>
          <option value="Shubham"></option>
        </datalist>
      </div>
      <div className="userdetails-child-2">
        {filteredUser?.map((user, id) => (
          <User user={user} key={id} />
        ))}
      </div>
    </div>
  );
};
