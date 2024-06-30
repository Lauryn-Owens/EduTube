import React, { createContext, useState } from 'react';

// create a context with an empty default value
export const UserContext = createContext();

// create a provider component
export const UserProvider = ({ children }) => {
  // initialize the username state
  const [username, setUsername] = useState('');

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};
