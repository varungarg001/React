import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  // const [count, setCount] = useState(0);

  let obj = {
    name: "varun",
    age: 21,
  };

  let newarr = [12, 13, 14];

  return (
    <>
      <h1 className=" bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card username={"chaiaurcode"} btntext={"visit me "} />
      <Card username={"hiteshsir"}  />
    </>
  );
}

export default App;
