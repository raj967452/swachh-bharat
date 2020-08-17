import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";

import SigninScreen from "./screens/SigninScreen";

export default function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <BrowserRouter>
      <div className="App">{userInfo ? <h1>Home</h1> : <SigninScreen />}</div>
    </BrowserRouter>
  );
}
