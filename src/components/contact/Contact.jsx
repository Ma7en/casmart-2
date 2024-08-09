/* eslint-disable no-unused-vars */
import React from "react";
import "./Contact.scss";
import logo from "../../assets/images/header/logo.svg";

function Contact() {
    return (
        <>
            <div className="contact" id="contact">
                <div className="container">
                    <div className="footer-brand">
                        <a href="#" className="logo">
                            <img src={`${logo}`} alt="Casmart logo" />
                        </a>

                        <p className="footer-text">
                            Casmart is a fashion theme for presents a complete
                            wardrobe of uniquely crafted Ethnic Wear, Casuals,
                            Edgy Denims, & Accessories inspired from the most
                            contemporary
                        </p>

                        <ul className="social-list">
                            <li>
                                <a href="#" className="social-link">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16c24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31"
                                        />
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M496 109.5a201.8 201.8 0 0 1-56.55 15.3a97.5 97.5 0 0 0 43.33-53.6a197.7 197.7 0 0 1-62.56 23.5A99.14 99.14 0 0 0 348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.2 93.2 0 0 0 2.54 22.1a280.7 280.7 0 0 1-203-101.3A95.7 95.7 0 0 0 36 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0 1 35.22 199v1.2c0 47 34 86.1 79 95a100.8 100.8 0 0 1-25.94 3.4a94.4 94.4 0 0 1-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.6 199.6 0 0 1 39.5 405.6a203 203 0 0 1-23.5-1.4A278.7 278.7 0 0 0 166.74 448c181.36 0 280.44-147.7 280.44-275.8c0-4.2-.11-8.4-.31-12.5A198.5 198.5 0 0 0 496 109.5"
                                        />
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M349.33 69.33a93.62 93.62 0 0 1 93.34 93.34v186.66a93.62 93.62 0 0 1-93.34 93.34H162.67a93.62 93.62 0 0 1-93.34-93.34V162.67a93.62 93.62 0 0 1 93.34-93.34zm0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M377.33 162.67a28 28 0 1 1 28-28a27.94 27.94 0 0 1-28 28M256 181.33A74.67 74.67 0 1 1 181.33 256A74.75 74.75 0 0 1 256 181.33m0-37.33a112 112 0 1 0 112 112a112 112 0 0 0-112-112"
                                        />
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M256.05 32c-123.7 0-224 100.3-224 224c0 91.7 55.2 170.5 134.1 205.2c-.6-15.6-.1-34.4 3.9-51.4c4.3-18.2 28.8-122.1 28.8-122.1s-7.2-14.3-7.2-35.4c0-33.2 19.2-58 43.2-58c20.4 0 30.2 15.3 30.2 33.6c0 20.5-13.1 51.1-19.8 79.5c-5.6 23.8 11.9 43.1 35.4 43.1c42.4 0 71-54.5 71-119.1c0-49.1-33.1-85.8-93.2-85.8c-67.9 0-110.3 50.7-110.3 107.3c0 19.5 5.8 33.3 14.8 43.9c4.1 4.9 4.7 6.9 3.2 12.5c-1.1 4.1-3.5 14-4.6 18c-1.5 5.7-6.1 7.7-11.2 5.6c-31.3-12.8-45.9-47-45.9-85.6c0-63.6 53.7-139.9 160.1-139.9c85.5 0 141.8 61.9 141.8 128.3c0 87.9-48.9 153.5-120.9 153.5c-24.2 0-46.9-13.1-54.7-27.9c0 0-13 51.6-15.8 61.6c-4.7 17.3-14 34.5-22.5 48a225.1 225.1 0 0 0 63.5 9.2c123.7 0 224-100.3 224-224S379.75 32 256.05 32"
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <ul className="footer-list">
                        <li>
                            <p className="footer-list-title">Information</p>
                        </li>

                        <li>
                            <a href="#" className="footer-link">
                                About Company
                            </a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">
                                Payment Type
                            </a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">
                                Awards Winning
                            </a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">
                                World Media Partner
                            </a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">
                                Become an Agent
                            </a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">
                                Refund Policy
                            </a>
                        </li>
                    </ul>

                    <ul className="footer-list">
                        <li>
                            <p className="footer-list-title">Help & Support</p>
                        </li>

                        <li>
                            <a href="#" className="footer-link">
                                Dealers & Agents
                            </a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">
                                FAQ Information
                            </a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">
                                Return Policy
                            </a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">
                                Shipping & Delivery
                            </a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">
                                Order Tranking
                            </a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">
                                List of Shops
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Contact;
