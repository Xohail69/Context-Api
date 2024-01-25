import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    //Using Context here
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e)=> {
        e.preventDefault()
        setUser({username, password})
    }
    return (
        <div>
            <h2>Login Kro</h2>
            <input type="text"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            placeholder="username"/>
            {'  \u00A0'}
            <input type="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder="Password"/>
            <button onClick={handleSubmit}>Submit Hoja</button>
        </div>
    )
}
export default Login