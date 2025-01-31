import React from "react";
import { useState } from "react";
import UserContextProvider from "../context/contexts";

function Login() {
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");

  const { setusername, passwordset } = UserContextProvider();

  const handleRequest = (e) => {
    e.preventDefault();
    setusername(user);

    passwordset(password);
  };

  return (
    <>
      <h1>Login form</h1>
      <input
        type="text"
        placeholder="Enter your Username"
        onChange={(e) => {
          setuser(e.target.value);
        }}
      />{" "}
      <input
        type="password"
        placeholder="Enter your Password"
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />{" "}
      <button onClick={handleRequest}>Submit</button>
    </>
  );
}

export default Login;
