import React from "react";
import { useContext, createContext } from "react";

export const UserContext = createContext({
  username: "",
  password: "",
  setusername: () => {},
  passwordset: () => {},
});

export const ContextProvider = UserContext.Provider;

export default function UserContextProvider() {
  return useContext(UserContext);
}
