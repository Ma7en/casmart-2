/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function Product({ product }) {
    const { id, thumbnail, title, price } = product;

    return (
        <>
            <li className="product-card">
                <div>
                    <figure className="card-banner">
                        <a>
                            <img
                                src={`${thumbnail}`}
                                alt="${product.title}"
                                loading="lazy"
                                width="800"
                                height="1034"
                                className="w-100"
                            />
                        </a>

                        <div className="card-actions">
                            <Link
                                to={`/product/${id}`}
                                className="card-action-btn"
                                aria-label="Quick view"
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
                                        d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112"
                                    />
                                    <circle
                                        cx="256"
                                        cy="256"
                                        r="80"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeMiterlimit="10"
                                        strokeWidth="32"
                                    />
                                </svg>
                            </Link>

                            <button
                                className="card-action-btn cart-btn"
                                // onClick="addToCart(${product.id})"
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
                                        d="M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16Zm80 0v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32"
                                    />
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="32"
                                        d="M160 224v16a96 96 0 0 0 96 96h0a96 96 0 0 0 96-96v-16"
                                    />
                                </svg>

                                <span>Add to Cart</span>
                            </button>
                        </div>
                    </figure>

                    <div className="card-content">
                        <h2 className="h4 card-title">
                            <a>{title}</a>
                        </h2>

                        <div className="card-price">
                            <data value="${product.price}">
                                &pound;${price}
                            </data>
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
}

export default Product;
