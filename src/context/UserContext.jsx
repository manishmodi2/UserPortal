import React from 'react'
import { createContext, useState } from 'react';
export const UserContext = createContext(); 

const UserContextProvider = (props) => {
  const [toggler, settoggler] = useState(true);
  const [users, setusers] = useState([]);
  
  return (
    <UserContext.Provider value={{ toggler, settoggler, users, setusers }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;