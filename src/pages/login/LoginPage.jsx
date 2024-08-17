/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import LoginForm from "../../components/loginform/LoginForm";
import { useNavigate } from "react-router-dom";

// style
import "./LoginPage.scss";

// context
import loginContext from "../../context/loginContext";

function LoginPage() {
    const navigate = useNavigate();
    const { login, setLogin } = useContext(loginContext);

    useEffect(() => {
        if (login.id) {
            navigate(`/portfolio`);
        }
    }, [login, navigate]);

    return (
        <>
            <main>
                <LoginForm />
            </main>
        </>
    );
}

export default LoginPage;
