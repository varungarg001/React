import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setcolor] = useState("black");

  return (
    <>
      <div
        className=" h-screen w-screen m-0 p-0 flex items-center justify-center "
        style={{ background: color }}
      >
        <div className=" flex items-end justify-evenly text-white bg-white w-[40rem] rounded-lg p-5">
          <button
            className=" bg-red-400 p-4 border rounded-md w-[4rem]"
            onClick={() => setcolor("red")}
          >
            Red
          </button>
          <button
            className=" bg-blue-400 p-4 border rounded-md w-[4rem]"
            onClick={() => setcolor("blue")}
          >
            Blue
          </button>
          <button
            className=" bg-yellow-500 p-4 border rounded-md w-[5rem]"
            onClick={() => setcolor("yellow")}
          >
            yellow
          </button>
          <button
            className=" bg-pink-400 p-4 border rounded-md w-[4rem]"
            onClick={() => setcolor("pink")}
          >
            pink
          </button>
          <button
            className="  bg-violet-500 p-4 border rounded-md w-[5rem]"
            onClick={() => setcolor("violet")}
          >
            violet
          </button>
          <button
            className=" bg-black p-4 border rounded-md w-[5rem]"
            onClick={() => setcolor("black")}
          >
            black
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
