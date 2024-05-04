import logo from "./logo.svg";
import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Explore from "./pages/explore/Explore";
import BookMark from "./pages/bookmark/BookMark";
import LikedPost from "./pages/likedpost/LikedPost";
import Profile from "./pages/profile/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthKey } from "./context/AuthContext";
import MainPage from "./component/mainPage/MainPage";
import LoginPage from "./pages/login/LoginPage";
import Header from "./component/header/Header";
import SignUp from "./pages/SignUp/SignUp";
import Feed from "./pages/Feed/Feed";
import { RequiresAuth } from "./component/requiresAuth/RequiresAuth";

function App() {
  const {
    state: { userInfo },
  } = useContext(AuthKey);
  return (
    <div className="App">
     
      <ToastContainer
        position="top-right"
        reverseOrder={false}
        containerStyle={{ top: "10%" }}
        toastOptions={{ style: { maxWidth: 500 } }}
      />
    
      {/* <Header /> */}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" />
        <Route element={<MainPage />}>
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
