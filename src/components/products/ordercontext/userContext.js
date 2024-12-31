import React, { createContext, useState, useContext } from "react";

// Create context
const UserContext = createContext();

// Custom hook to use context
export const useUserContext = () => useContext(UserContext);

// Context provider
export const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(
    sessionStorage.getItem("loggedInUser") || null
  );

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </UserContext.Provider>
  );
};
