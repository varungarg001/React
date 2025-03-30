import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const setTime = setInterval(() => {
      let date = new Date();
      setCount(date.toLocaleTimeString());
    }, 1000);
    return () => clearInterval(setTime);
  }, []);
  return (
    <>
      <div className=" bg-gray-700 w-full flex items-center justify-center h-[100vh]">
        <div className="bg-white w-[300px] h-[50px] text-center  font-bold text-4xl">
          {count}
        </div>
      </div>
    </>
  );
}

export default App;
