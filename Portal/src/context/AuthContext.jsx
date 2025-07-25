import {createContext, useEffect, useState } from "react"

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const[user,setUser] = useState(null);
    
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if(storedUser){
            setUser(storedUser);
        }
    },[]);

    const login = (userData) => {
        setUser(userData)
        localStorage.setItem("user",JSON.stringify(userData));
    };

    return(
        <AuthContext.Provider value={{user , login}}>
            {children}
        </AuthContext.Provider>
    )
};