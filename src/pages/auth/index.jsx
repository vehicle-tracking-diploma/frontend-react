import {useContext, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../context/AuthProvider";
import {useNavigate} from "react-router-dom";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();
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

            localStorage.setItem("token", response.data)
            login();
            navigate('/');

        } catch (error) {
            // Authentication failed
            console.log("Authentication failed", error.response.data);
        }
    };
    return (
        <>
            <body className="flex h-screen bg-gray-900 items-center">
            <div className="container mx-auto">
                <div className="flex justify-center px-6 ">
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                        <div
                            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                            style={{
                                backgroundImage: "url('https://rare-gallery.com/uploads/posts/372639-4k-wallpaper.jpg')"
                            }}
                        ></div>
                        <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                            <h3 className="pt-4 text-2xl text-center">
                                Спутниковая система навигации
                            </h3>
                            <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                <div className="mb-4">
                                    <label
                                        className="block mb-2 text-sm font-bold text-gray-700"
                                    >
                                        Имя
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="username"
                                        type="text"
                                        placeholder="Имя"
                                        name='username'
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        className="block mb-2 text-sm font-bold text-gray-700"
                                    >
                                        Пароль
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="password"
                                        placeholder="Пароль"
                                        name="password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                    />
                                    <p className="text-xs italic text-red-500">Пароль пуст!</p>
                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-gray-900 rounded-full hover:bg-gray-600 focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Подключиться
                                    </button>
                                </div>
                                <hr className="mb-6 border-t"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </body>
        </>
    )
}

export default Login;