/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Check for a logged-in user in local storage when the component mounts
  useEffect(() => {
    const data = window.localStorage.getItem("currentUser");
    if (data !== null) setCurrentUser(JSON.parse(data));
  }, []);
console.log(currentUser)
  // Function to handle user login
  const loginUser = (user) => {
    // Update the currentUser state
    setCurrentUser(user);
    // Save the user in local storage
    window.localStorage.setItem("currentUser", JSON.stringify(user));
  };

  // Function to handle user logout
  const logoutUser = () => {
    // Remove the user from the state
    setCurrentUser(null);
    // Remove the user from local storage
    window.localStorage.removeItem("currentUser");
  };

  return (
    <UserContext.Provider value={{ currentUser, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
