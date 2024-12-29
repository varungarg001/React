import React, { useState } from "react";

function App() {
  const [color, setcolor] = useState("olive");
  return (
    <>
      <div className="w-full h-screen " style={{ backgroundColor: color }}>
        <div className=" fixed flex flex-wrap  justify-center items-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl w-full">
            <button
              className="  outline-none px-4 py-2 rounded-lg text-white shadow-lg"
              style={{ backgroundColor: "red" }}
              onClick={() => {
                // onclick excepts a function and it does not show the return value from the function
                setcolor("red");
              }}
            >
              red
            </button>
            <button
              className=" outline-none px-4 py-2 rounded-lg text-white shadow-lg"
              style={{ backgroundColor: "yellow" }}
              onClick={() => {
                // onclick excepts a function and it does not show the return value from the function
                setcolor("yellow");
              }}
            >
              yellow
            </button>
            <button
              className="  outline-none px-4 py-2 rounded-lg text-white shadow-lg"
              style={{ backgroundColor: "yellowgreen" }}
              onClick={() => {
                // onclick excepts a function and it does not show the return value from the function
                setcolor("yellowgreen");
              }}
            >
              yellowgreen
            </button>
            <button
              className="  outline-none px-4 py-2 rounded-lg text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
              onClick={() => {
                // onclick excepts a function and it does not show the return value from the function
                setcolor("blue");
              }}
            >
              blue
            </button>
            <button
              className="  outline-none px-4 py-2 rounded-lg text-white shadow-lg"
              style={{ backgroundColor: "black" }}
              onClick={() => {
                // onclick excepts a function and it does not show the return value from the function
                setcolor("black");
              }}
            >
              Black
            </button>
            <button
              className="  outline-none px-4 py-2 rounded-lg text-white shadow-lg"
              style={{ backgroundColor: "green" }}
              onClick={() => {
                // onclick excepts a function and it does not show the return value from the function
                setcolor("green");
              }}
            >
              green
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
