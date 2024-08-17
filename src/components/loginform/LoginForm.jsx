/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// config
import { axiosInstance } from "../../api/config";

// context
import loginContext from "../../context/loginContext";

function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { login, setLogin } = useContext(loginContext);

    const [users, setUsers] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        setLoading(true);

        axiosInstance
            .get(`users`)
            .then((respons) => {
                // console.log(respons.data.users);
                setUsers(respons.data.users);
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) return;

    function handleLogin(e) {
        e.preventDefault();
        const user = users.find(
            (user) => user.username === username && user.password === password
        );
        // console.log(`33user`, user);
        if (user) {
            setLogin(user);
            navigate("/portfolio");
        } else {
            // console.log("Invalid username or password");
            alert("Invalid username or password");
        }
    }

    return (
        <>
            <section className="login">
                <div className="container">
                    <form id="login-form">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button type="submit" onClick={(e) => handleLogin(e)}>
                            Login
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default LoginForm;
