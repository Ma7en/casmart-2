/* eslint-disable no-unused-vars */
import React from "react";

function LoginForm() {
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
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                        />

                        <button type="submit">Login</button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default LoginForm;
