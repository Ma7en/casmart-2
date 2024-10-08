/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// scss
import "./Header.scss";

// context
import themeContext from "../../context/themeContext";
import languageContext from "../../context/languageContext";

// assets
import logo from "../../assets/images/header/logo.svg";

function Header() {
    const navigate = useNavigate();
    const { totalCount } = useSelector((state) => state.shoppingList);

    const { darkMode, setDarkMode } = useContext(themeContext);
    const { language, setLanguage } = useContext(languageContext);

    const [navbar, setNavbar] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setNavbar(false);
        });
    }, []);

    return (
        <>
            <header className="header" data-header>
                <div className="container">
                    <div className="overlay" data-overlay></div>

                    <Link
                        to={`/`}
                        className="logo"
                        onClick={() => setNavbar(false)}
                    >
                        <img
                            src={`${logo}`}
                            alt="Casmart logo"
                            width="130"
                            height="31"
                        />
                    </Link>

                    <nav
                        className={`navbar ${navbar ? "active" : ""}`}
                        data-navbar
                    >
                        <div className="navbar-top">
                            <Link
                                to={`/`}
                                className="logo"
                                onClick={() => setNavbar(false)}
                            >
                                <img
                                    src={`${logo}`}
                                    alt="Casmart logo"
                                    width="130"
                                    height="31"
                                />
                            </Link>

                            <button
                                className="nav-close-btn"
                                data-nav-close-btn
                                aria-label="Close Menu"
                                onClick={() => setNavbar(!navbar)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="32"
                                        d="M368 368L144 144m224 0L144 368"
                                    />
                                </svg>
                            </button>
                        </div>

                        <ul className="navbar-list">
                            <li>
                                <Link
                                    to={`/home`}
                                    className="navbar-link"
                                    onClick={() => setNavbar(false)}
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to={`/home#service`}
                                    className="navbar-link"
                                    onClick={() => setNavbar(false)}
                                >
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to={`/home#product`}
                                    className="navbar-link"
                                    onClick={() => setNavbar(false)}
                                >
                                    Shop
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to={`/home#blog`}
                                    className="navbar-link"
                                    onClick={() => setNavbar(false)}
                                >
                                    Blog
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to={`/home#contact`}
                                    className="navbar-link"
                                    onClick={() => setNavbar(false)}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="header-actions">
                        <Link to={`/login`} className="header-action-btn sign">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="32"
                                    d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96"
                                />
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeMiterlimit="10"
                                    strokeWidth="32"
                                    d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304Z"
                                />
                            </svg>

                            <p className="header-action-label">Sign in</p>
                        </Link>

                        <Link
                            to={`/shopping`}
                            className="header-action-btn view"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 512 512"
                            >
                                <circle
                                    cx="176"
                                    cy="416"
                                    r="16"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="32"
                                />
                                <circle
                                    cx="400"
                                    cy="416"
                                    r="16"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="32"
                                />
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="32"
                                    d="M48 80h64l48 272h256"
                                />
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="32"
                                    d="M160 288h249.44a8 8 0 0 0 7.85-6.43l28.8-144a8 8 0 0 0-7.85-9.57H128"
                                />
                            </svg>

                            <p className="header-action-label">Cart</p>

                            <div className="btn-badge green" aria-hidden="true">
                                {totalCount}
                            </div>
                        </Link>
                    </div>

                    <button
                        className={`nav-open-btn ${navbar ? "active" : ""}`}
                        data-nav-open-btn
                        aria-label="Open Menu"
                        onClick={() => setNavbar(!navbar)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>
        </>
    );
}

export default Header;
