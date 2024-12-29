import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setcounter] = useState(15);
  // let counter = 5;
  const addValue = () => {
    if (counter >= 20) {
      alert("value can't be greater than 20");

      return;
    }
    setcounter((prevcounter) => prevcounter + 1);
    setcounter((prevcounter) => prevcounter + 1);
    setcounter((prevcounter) => prevcounter + 1);
    setcounter((prevcounter) => prevcounter + 1);
    setcounter((prevcounter) => prevcounter + 1);
    setcounter((prevcounter) => prevcounter + 1);
  };

  const decreaseValue = () => {
    if (counter <= 0) {
      alert("value can't be negative");
      return;
    }
    setcounter(counter - 1);
  };
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter Value:{counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  );
}

export default App;
