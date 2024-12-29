import React from "react";
rfce;

function Card({ username, btntext = "visit me" }) {
  // console.log(props);

  return (
    <div
      className="flex flex-col rounded-xl  p-4"
      style={{
        border: "0.88px solid",

        backdropFilter: "saturate(180%) blur(14px)",
        background: " #ffffff0d",
      }}
    >
      <div>
        <img
          src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
          alt="nft-gif"
          width="400"
          height="400"
          className="rounded-xl"
        />
        <h1>{username}</h1>
        <button>{btntext}</button>
      </div>
    </div>
  );
}

export default Card;
