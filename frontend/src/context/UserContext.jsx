import { createContext, useContext, useEffect, useState } from "react";
import Cookie from "js-cookie"
import { Navigate, useNavigate } from "react-router-dom";

const UserContext = createContext({
    registerUser: () => {},
    loginUser: () => {},
    logoutUser: () => {},
});

export function UserProvider({ children }) {
    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        const token = Cookie.get("token");
        if (!token) {
            setIsLogged(false);
        }
        console.log(token);
    }, [])
    async function registerUser (user) {
        try {
            const res = await fetch("http://localhost:5000/api/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            const data = await res.json();
            setUser(data);
            setIsLogged(true);
            Cookie.set("token", data.token)
            navigate("/")
        
        } catch (error) {
            console.error(error);
        }
    }
    async function loginUser (user) {
        try {
            const res = await fetch("http://localhost:5000/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            const data = await res.json();
            setUser(data);
            setIsLogged(true);
            Cookie.set("token", data.token)
            navigate("/")
        } catch (error) {
            console.error(error);
        }
    }
    async function logoutUser() {
        try {
            await fetch("http://localhost:5000/api/users/logout", {
                method: "POST",
                
            });
            setUser({});
            setIsLogged(false)
            Cookie.remove("token")
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <UserContext.Provider value={{registerUser, loginUser, logoutUser, user, isLogged, setIsLogged }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);