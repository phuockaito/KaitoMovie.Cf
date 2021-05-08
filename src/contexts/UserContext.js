import React, { createContext, useState } from "react";
const UserContext = createContext(null);
const UserContextProvider = (props) => {
    const [token, setToken] = useState('1');
    const [data, setData] = useState('2');
    const state = {
        token: [token, setToken],
        data: [data, setData],
    }

    return (
        <UserContext.Provider value={state}>
            {props.children}
        </UserContext.Provider>
    )
}
export { UserContext, UserContextProvider };