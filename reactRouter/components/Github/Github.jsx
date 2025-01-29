import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  console.log(data);

  //   const [data, setdata] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hiteshchoudhary")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setdata(data);
  //         console.log(data);
  //       });
  //   }, []);
  return (
    <div className=" text-center m-4 bg-gray-500 text-white p-4 text-3xl">
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="git picture" width={300} />
    </div>
  );
}

export default Github;

export const gitInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");

  return await response.json();
};
