/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// context
import loginContext from "../../context/loginContext";

function Portfolio() {
    const navigate = useNavigate();
    const { login, setLogin } = useContext(loginContext);

    const {
        id,
        image,
        firstName,
        lastName,
        username,
        age,
        birthDate,
        gender,
        phone,
        email,
        password,
    } = login;
    const [passwordUser, setPasswordUser] = useState(password);

    function handleLogout(e) {
        e.preventDefault();
        setLogin({});
        navigate(`/login`);
    }

    return (
        <>
            <section className="portfolio">
                <div className="container">
                    <div id="profile-content">
                        <img
                            src={`${image}`}
                            alt={`${firstName}`}
                            className="profile-image"
                        />

                        <h2>Welcome, ${username}</h2>
                        <div>
                            <p>
                                <strong>ID: </strong>
                                <span>{id}</span>
                            </p>

                            <p>
                                <strong>firstName: </strong>
                                <span>{firstName}</span>
                            </p>

                            <p>
                                <strong>lastName: </strong>
                                <span>{lastName}</span>
                            </p>

                            <p>
                                <strong>Age: </strong>
                                <span>{age}</span>
                            </p>

                            <p>
                                <strong>birthDate: </strong>
                                <span>{birthDate}</span>
                            </p>

                            <p>
                                <strong>gender: </strong>
                                <span>{gender}</span>
                            </p>

                            <p>
                                <strong>phone: </strong>
                                <a href={`tel:${phone}`}>{phone}</a>
                            </p>

                            <p>
                                <strong>email: </strong>
                                <a href={`mailto:${email}`}>{email}</a>
                            </p>

                            <p>
                                <strong>password: </strong>

                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={passwordUser}
                                    onChange={(e) =>
                                        setPasswordUser(e.target.value)
                                    }
                                />
                            </p>
                        </div>

                        <button id="logout" onClick={(e) => handleLogout(e)}>
                            Logout
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Portfolio;
