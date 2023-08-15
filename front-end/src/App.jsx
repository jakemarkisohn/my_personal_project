import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import { createContext } from "react";
import { api } from "./utilities";
// import HomePage from './components/HomePage'
// import Navbar from './components/Navbar'
// import { RegisterPage } from './components/RegisterPage'

export const userContext = createContext()

function App() {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()


    useEffect(() => {
        console.log(user);
    }, [user]);

    const whoAmI = async () => {
        let token = localStorage.getItem("token");
        if (token) {
            api.defaults.headers.common["Authorization"] = `Token ${token}`;
            let response = await api.get("users/");
            setUser(response.data)
            navigate("home");
        } else {
            setUser(null);
            delete api.defaults.headers.common["Authorization"];
            navigate("login");
        }
    };

    useEffect(() =>{
        whoAmI()
    }, []);

    const logOut = async() => {
        try{
        await api.post("users/logout/");
        localStorage.removeItem("token");
        setUser(null)
        delete api.defaults.headers.common["Authorization"];
        navigate("/login");
    } catch (error) {
        console.error("Error:", error)
    }};

    return (
        <div>
        <div id="app">
            <header>
              <nav>
                {
                user
                ?
                <>
                <Link to="/home">Home</Link>
                <button onClick={logOut}>Log Out</button>
                </>
                :
                <>
                </>
                }
              </nav>
            </header>
            <userContext.Provider value={{ user, setUser}}>
                <Outlet />
            </userContext.Provider>
        </div>
        </div>
    );
};

export default App;