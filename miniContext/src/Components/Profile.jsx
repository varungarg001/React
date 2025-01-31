import React, { useContext } from "react";
import usercontext from "../context/UserContext";

function Profile() {
  const { user } = useContext(usercontext);

  if (!user) return <div>Please login</div>;

  return <div>Welcome {user.username}</div>;
}

export default Profile;
