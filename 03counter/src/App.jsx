import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  function addvalue() {
    setCount(count + 1);
  }
  function decreasevalue() {
    setCount(count - 1);
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter Value:{count}</h2>

      <button onClick={addvalue}>Add Value</button>
      <br />
      <button onClick={decreasevalue}>Decrease Value</button>
    </>
  );
}

export default App;
