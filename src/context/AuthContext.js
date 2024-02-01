import { createContext, useReducer, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthReducer, { initialState } from "../reducer/AuthReducer";
import { toast } from "react-toastify";
export const AuthKey = createContext();

const AuthContext = ({ children }) => {
  const localStorageResponse = JSON.parse(localStorage.getItem("LoginDetails"));
  const [token, setToken] = useState(localStorageResponse?.token || null);
  const [userInfo, setUserInfo] = useState(localStorageResponse?.user || null);
  const navigate = useNavigate();
  const location = useLocation();
  const [state, authDispatch] = useReducer(AuthReducer, initialState);
  // console.log(userInfo, 'user test', token, localStorageResponse)
  // authDispatch({type : "USER-INFO", payload : userInfo})
  const loginhandler = async ({ username, password }) => {
    try {
      console.log(username, password, token);
      const passobj = { username, password };
      const sendReq = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(passobj),
      });
      console.log(sendReq.status);
      if (sendReq.status === 200) {
        const { foundUser, encodedToken } = await sendReq.json();
        localStorage.setItem(
          "LoginDetails",
          JSON.stringify({ user: foundUser, token: encodedToken })
        );
        //setUserInfo(foundUser)
        setToken(encodedToken);
        authDispatch({ type: "SET-TOKEN", payload: encodedToken });
        authDispatch({ type: "SET-USER-INFO", payload: foundUser });
        authDispatch({ type: "LOGGED-IN", payload: true });
        encodedToken && navigate("/explore");
        // console.log(token)
        // console.log(userInfo)
        // console.log(state)
        toast("Logged in successfully");
      } else {
        toast("Incorrect username or password");
        console.log("Incorrect credentials");
      }
    } catch (error) {}
  };

  const logouthandler = () => {
    //console.log(token , navigate)
    // authDispatch({type : "SET-TOKEN" , payload : null})
    // authDispatch({type : "SET-USER-INFO", payload : null})
    // authDispatch({type : "LOGGED-IN", payload : false})
    console.log("jdnfjdnf");
    authDispatch({ type: "LOGGED-OUT" });
    setToken(null);
    setUserInfo(null);
    localStorage.removeItem("loginDetails");
    localStorage.removeItem("Post");
    //toggelSigninHandler()
    navigate("/login");
    //console.log(token , navigate)
    toast("logged out successfull");
  };

  const updateProfile = async (updateUserInfo) => {
    try {
      const passobj = { userData: updateUserInfo };
      // console.log(updateUserInfo, 'update')
      const sendReq = await fetch("/api/users/edit", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          authorization: token,
        },
        body: JSON.stringify(passobj),
      });
      console.log(sendReq);
      const profile = {
        ...JSON.parse(localStorage.getItem("loginDetails")),
        user: updateUserInfo,
      };
      localStorage.setItem("loginDetails", JSON.stringify(profile));
      if (sendReq.status === 201) {
        const { user, encodedToken } = await sendReq.json();
        //console.log(user)
        authDispatch({ type: "SET-USER-INFO", payload: user });
      } else {
        console.log("Incorrect");
      }
    } catch (error) {}
  };
  const signUpHandler = async (userSignUpDetails) => {
    console.log(userSignUpDetails);
    const { firstname, lastname, email, username, password, confirmpassword } =
      userSignUpDetails;
    if (password === confirmpassword) {
      try {
        const passobj = { firstname, lastname, email, username, password };
        console.log("SingUP");
        const sendreq = await fetch("/api/auth/signup", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify(passobj),
        });
        console.log(sendreq, sendreq.status);

        // const reposnetest = await sendreq.json();
        // console.log(reposnetest)
        if (sendreq.status === 201 || sendreq.status === 200) {
          const { createdUser, encodedToken } = await sendreq.json();
          //console.log(createdUser, encodedToken, 'dsdsdd')
          localStorage.setItem(
            "loginDetails",
            JSON.stringify({ user: createdUser, token: encodedToken })
          );

          //const localStorageResponse = localStorage.getItem("loginDetails")
          //const localStorageparsed = JSON.parse(localStorageResponse)

          //const {user, token} = JSON.parse(localStorageResponse)

          setToken(encodedToken);
          authDispatch({ type: "SET-TOKEN", payload: encodedToken });
          authDispatch({ type: "SET-USER-INFO", payload: createdUser });
          authDispatch({ type: "LOGGED-IN", payload: true });
          // console.log(encodedToken)
          toast("Signed Up successfully. Please Login to continue");
          // console.log(localStorageResponse)

          encodedToken && navigate("/login");
        } else if (sendreq.status === 422) {
          toast.error(
            "User email already exists! Please try signing up with another email!"
          );
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast("Your password is not matching");
    }
  };
  const valuetobepassed = {
    loginhandler,
    state,
    token,
    logouthandler,
    updateProfile,
    authDispatch,
    signUpHandler,
  };
  return (
    <AuthKey.Provider value={valuetobepassed}>{children}</AuthKey.Provider>
  );
};

export default AuthContext;
