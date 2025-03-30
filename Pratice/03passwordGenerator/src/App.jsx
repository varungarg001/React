import "./App.css";
import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberallowed, setNumberAllowed] = useState(true);
  const [characterAllowed, setCharAllowed] = useState(true);
  const [password, setpassword] = useState("");
  const passwordref = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberallowed) {
      str += "0123456789";
    }

    if (characterAllowed) {
      str += "!@#$%^&*()_+";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setpassword(pass);
  }, [length, numberallowed, characterAllowed, setpassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberallowed, characterAllowed, passwordGenerator]);

  const copypasswordtoclipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    passwordref.current?.select();
    // passwordref.current?.setSelectionRange(0, 3);
  }, [password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-lg px-4 my-8  bg-gray-800 rounded-lg text-orange-800 text-center h-[7rem]">
        <h1 className=" text-white text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mt-4 ">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            readOnly
            placeholder="Password"
          />
          <button
            className="outline-none bg-blue-700 text-white p-2 text-center"
            onClick={copypasswordtoclipboard}
          >
            copy
          </button>
        </div>
        <div className=" flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              value={length}
              max={20}
              min={8}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
          </div>
          <label htmlFor="" className=" text-white">
            length: {length}
          </label>
          <div className=" flex items-center gap-x-1 text-white">
            <input
              type="checkbox"
              defaultChecked={numberallowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            Number
          </div>
          <div className=" flex items-center gap-x-1 text-white">
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            Character
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
