import logo from "./logo.svg";
import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore";
import BookMark from "./pages/BookMark";
import LikedPost from "./pages/LikedPost";
import Profile from "./pages/Profile";
import Home from "./component/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthKey } from "./context/AuthContext";
import SideBar from "./component/SideBar";
import LoginPage from "./pages/LoginPage";
import Navigation from "./component/Header/Header";
import SignUp from "./pages/SignUp/SignUp";
import Feed from "./pages/Feed/Feed";
import { RequiresAuth } from "./component/RequiresAuth/RequiresAuth";

function App() {
  const {
    state: { userInfo },
  } = useContext(AuthKey);
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <ToastContainer
        position="top-right"
        reverseOrder={false}
        containerStyle={{ top: "10%" }}
        toastOptions={{ style: { maxWidth: 500 } }}
      />
      {/* <h1>Social Media {userInfo?.firstName}</h1> */}
      {/* <NavLink to="/explore">Explore</NavLink>
        <NavLink to="/bookmark">Bookmark</NavLink>
        <NavLink to="/likedpost">Liked Post</NavLink>
        <NavLink to="/profile/user/:username">Profile</NavLink> */}
      {/* <Navigation /> */}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" />
        <Route element={<SideBar />}>
          {/* <Route path = "/" element = {<Home/>} /> */}
          <Route
            path="/"
            element={
              <RequiresAuth>
                <Feed />
              </RequiresAuth>
            }
          />
          <Route
            path="/explore"
            element={
              <RequiresAuth>
                <Explore />
              </RequiresAuth>
            }
          />
          <Route path="/bookmark" element={<BookMark />} />
          <Route path="/likedpost" element={<LikedPost />} />
          <Route path="/profile/user/:username" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
