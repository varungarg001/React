import React from "react";
import UserContextProvider from "../context/contexts";

function Profile() {
  const { username, password } = UserContextProvider();
  if (!username) return <div>Please login</div>;
  return (
    <div>
      Welcome {username} and Your Password is: {password}
    </div>
  );
}

export default Profile;
