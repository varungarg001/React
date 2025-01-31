import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ContextProvider } from "./context/contexts";
import Login from "./components/login";
import Profile from "./components/profile";

function App() {
  // const [count, setCount] = useState(0);

  const [username, setuser] = useState("");
  const [password, setpassword] = useState("");

  const setusername = (username) => {
    setuser(username);
  };
  const passwordset = (password) => {
    setpassword(password);
  };

  return (
    <ContextProvider value={{ username, password, setusername, passwordset }}>
      <Login />
      <Profile />
    </ContextProvider>
  );
}

export default App;
