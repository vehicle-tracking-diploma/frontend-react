import {useContext, useState} from "react";
import axios from "axios";
import {AuthContext} from "../context/AuthProvider";
export function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login,isAuthenticated } = useContext(AuthContext);
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/api/v1/login", {
                email,
                password,
            });

            // User is authenticated
            console.log(isAuthenticated)
            localStorage.setItem("token",response.data)
            login();
            console.log(isAuthenticated)
        } catch (error) {
            // Authentication failed
            console.log("Authentication failed", error.response.data);
        }
    };
return(
    <>
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" value={email} onChange={handleEmailChange} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    </>
)
}
export default Login;