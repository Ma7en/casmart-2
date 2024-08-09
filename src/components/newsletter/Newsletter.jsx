/* eslint-disable no-unused-vars */
import React from "react";
import newsletterbg from "../../assets/images/news/newsletter-bg.png";

function Newsletter() {
    return (
        <>
            <section className="section newsletter">
                <div className="container">
                    <div
                        className="newsletter-card"
                        style={{ backgroundImage: `url(${newsletterbg})` }}
                    >
                        <h2 className="card-title">Subscribe Newsletter</h2>

                        <p className="card-text">
                            Enter your email below to be the first to know about
                            new collections and product launches.
                        </p>

                        <form action="" className="card-form">
                            <div className="input-wrapper">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 512 512"
                                >
                                    <rect
                                        width="416"
                                        height="320"
                                        x="48"
                                        y="96"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="32"
                                        rx="40"
                                        ry="40"
                                    />
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="32"
                                        d="m112 160l144 112l144-112"
                                    />
                                </svg>

                                <input
                                    type="email"
                                    name="emal"
                                    placeholder="Enter your email"
                                    required
                                    className="input-field"
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary w-100"
                            >
                                <span>Subscribe</span>

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
                                        strokeWidth="48"
                                        d="m268 112l144 144l-144 144m124-144H100"
                                    />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Newsletter;
