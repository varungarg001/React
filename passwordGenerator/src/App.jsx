import React, { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberallowed, setnumberallowed] = useState(false);
  const [charallowed, setcharallowed] = useState(false);
  const [Password, setpassword] = useState("");

  // use ref hook

  const passwordref = useRef(null);

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberallowed) {
      str += "0123456789";
    }
    if (charallowed) {
      str += "!@#$%^&*()_+";
    }
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, numberallowed, charallowed, setpassword]);

  const copypasswordtoclipboard = useCallback(() => {
    window.navigator.clipboard.writeText(Password);
    passwordref.current?.select();
    // passwordref.current?.setSelectionRange(0, 3);
  }, [Password]);

  useEffect(() => {
    PasswordGenerator();
  }, [length, numberallowed, charallowed, PasswordGenerator]);

  // PasswordGenerator();
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-lg px-4 my-8  bg-gray-800 rounded-lg text-orange-700 text-center h-[7rem]">
        <h1 className=" text-white text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mt-4 ">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordref}
          />
          <button
            onClick={copypasswordtoclipboard}
            className="outline-none bg-blue-700 text-white p-2 text-center"
          >
            Copy
          </button>
        </div>
        <div className=" flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              className=" cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className=" flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberallowed}
              onChange={() => {
                setnumberallowed((prev) => !prev);
              }}
            />
            Number
          </div>
          <div className=" flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charallowed}
              onChange={() => {
                setcharallowed((prev) => !prev);
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
