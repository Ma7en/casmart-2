/* eslint-disable no-unused-vars */
import React from "react";

// assets
import blog1 from "../../assets/images/blog/blog-1.jpg";
import blog2 from "../../assets/images/blog/blog-2.jpg";
import blog3 from "../../assets/images/blog/blog-3.jpg";

function Blogs() {
    return (
        <>
            <section className="section blog" id="blog">
                <div className="container">
                    <h2 className="h2 section-title">Latest fashion news</h2>

                    <ul className="blog-list">
                        <li>
                            <div className="blog-card">
                                <figure className="card-banner">
                                    <a href="#">
                                        <img
                                            src={`${blog1}`}
                                            alt="Worthy Cyber Monday Fashion From Casmart"
                                            loading="lazy"
                                            width="1020"
                                            height="700"
                                            className="w-100"
                                        />
                                    </a>
                                </figure>

                                <div className="card-content">
                                    <ul className="card-meta-list">
                                        <li className="card-meta-item">
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
                                                    d="M64 192v-72a40 40 0 0 1 40-40h75.89a40 40 0 0 1 22.19 6.72l27.84 18.56a40 40 0 0 0 22.19 6.72H408a40 40 0 0 1 40 40v40"
                                                />
                                                <path
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="32"
                                                    d="M479.9 226.55L463.68 392a40 40 0 0 1-39.93 40H88.25a40 40 0 0 1-39.93-40L32.1 226.55A32 32 0 0 1 64 192h384.1a32 32 0 0 1 31.8 34.55"
                                                />
                                            </svg>

                                            <a
                                                href="#"
                                                className="card-meta-link"
                                            >
                                                Fashion
                                            </a>
                                        </li>

                                        <li className="card-meta-item">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1em"
                                                height="1em"
                                                viewBox="0 0 512 512"
                                            >
                                                <path
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeMiterlimit="10"
                                                    strokeWidth="32"
                                                    d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z"
                                                />
                                                <path
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="32"
                                                    d="M256 128v144h96"
                                                />
                                            </svg>

                                            <a
                                                href="#"
                                                className="card-meta-link"
                                            >
                                                <time dateTime="2021-03-31">
                                                    31 Mar 2021
                                                </time>
                                            </a>
                                        </li>
                                    </ul>

                                    <h3 className="h3 card-title">
                                        <a href="#">
                                            Worthy Cyber Monday Fashion From
                                            Casmart
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="blog-card">
                                <figure className="card-banner">
                                    <a href="#">
                                        <img
                                            src={`${blog2}`}
                                            alt="Holiday Home Decoration I’ve Recently Ordered"
                                            loading="lazy"
                                            width="1020"
                                            height="700"
                                            className="w-100"
                                        />
                                    </a>
                                </figure>

                                <div className="card-content">
                                    <ul className="card-meta-list">
                                        <li className="card-meta-item">
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
                                                    d="M64 192v-72a40 40 0 0 1 40-40h75.89a40 40 0 0 1 22.19 6.72l27.84 18.56a40 40 0 0 0 22.19 6.72H408a40 40 0 0 1 40 40v40"
                                                />
                                                <path
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="32"
                                                    d="M479.9 226.55L463.68 392a40 40 0 0 1-39.93 40H88.25a40 40 0 0 1-39.93-40L32.1 226.55A32 32 0 0 1 64 192h384.1a32 32 0 0 1 31.8 34.55"
                                                />
                                            </svg>

                                            <a
                                                href="#"
                                                className="card-meta-link"
                                            >
                                                Fashion
                                            </a>
                                        </li>

                                        <li className="card-meta-item">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1em"
                                                height="1em"
                                                viewBox="0 0 512 512"
                                            >
                                                <path
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeMiterlimit="10"
                                                    strokeWidth="32"
                                                    d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z"
                                                />
                                                <path
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="32"
                                                    d="M256 128v144h96"
                                                />
                                            </svg>

                                            <a
                                                href="#"
                                                className="card-meta-link"
                                            >
                                                <time dateTime="2021-03-31">
                                                    31 Mar 2021
                                                </time>
                                            </a>
                                        </li>
                                    </ul>

                                    <h3 className="h3 card-title">
                                        <a href="#">
                                            Holiday Home Decoration I’ve
                                            Recently Ordered
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="blog-card">
                                <figure className="card-banner">
                                    <a href="#">
                                        <img
                                            src={`${blog3}`}
                                            alt="Unique Ideas for Fashion You Haven’t heard yet"
                                            loading="lazy"
                                            width="1020"
                                            height="700"
                                            className="w-100"
                                        />
                                    </a>
                                </figure>

                                <div className="card-content">
                                    <ul className="card-meta-list">
                                        <li className="card-meta-item">
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
                                                    d="M64 192v-72a40 40 0 0 1 40-40h75.89a40 40 0 0 1 22.19 6.72l27.84 18.56a40 40 0 0 0 22.19 6.72H408a40 40 0 0 1 40 40v40"
                                                />
                                                <path
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="32"
                                                    d="M479.9 226.55L463.68 392a40 40 0 0 1-39.93 40H88.25a40 40 0 0 1-39.93-40L32.1 226.55A32 32 0 0 1 64 192h384.1a32 32 0 0 1 31.8 34.55"
                                                />
                                            </svg>

                                            <a
                                                href="#"
                                                className="card-meta-link"
                                            >
                                                Fashion
                                            </a>
                                        </li>

                                        <li className="card-meta-item">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1em"
                                                height="1em"
                                                viewBox="0 0 512 512"
                                            >
                                                <path
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeMiterlimit="10"
                                                    strokeWidth="32"
                                                    d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z"
                                                />
                                                <path
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="32"
                                                    d="M256 128v144h96"
                                                />
                                            </svg>

                                            <a
                                                href="#"
                                                className="card-meta-link"
                                            >
                                                <time dateTime="2021-03-31">
                                                    31 Mar 2021
                                                </time>
                                            </a>
                                        </li>
                                    </ul>

                                    <h3 className="h3 card-title">
                                        <a href="#">
                                            Unique Ideas for Fashion You Haven’t
                                            heard yet
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Blogs;
