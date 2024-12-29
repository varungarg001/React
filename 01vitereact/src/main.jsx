import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function Myapp() {
  return (
    <div>
      <h1>My custom chai</h1>
    </div>
  );
}

const newElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "clcik me to visit google"
  // evaluated expression 
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(newElement);
