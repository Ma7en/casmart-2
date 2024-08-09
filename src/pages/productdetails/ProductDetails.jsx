/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/fontawesome-svg-core";
import {} from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/react-fontawesome";
import {
    faStar,
    faStarHalfAlt,
    faStar as farStar,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { axiosInstance } from "../../api/config";

import avter1 from "../../assets/images/header/avter-1.png";

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        setLoading(true);

        axiosInstance
            .get(`products/${id}`)
            .then((respons) => {
                console.log(respons.data);
                setProduct(respons.data);
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    if (loading) return;

    const {
        availabilityStatus: stock,
        description,
        thumbnail: image,
        title,
        rating,
        price,
        images,
        thumbnail,
        returnPolicy,
        shippingInformation,
        warrantyInformation,
        weight,
        reviews,
    } = product;
    console.log(reviews);

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.25 && rating - fullStars < 0.75;

    return (
        <>
            {loading ? (
                <span className="visually-hidden">Loading...</span>
            ) : product ? (
                <>
                    <main>
                        <section className="product-details">
                            <div className="container">
                                <div className="title">
                                    <h1>product details</h1>
                                </div>

                                <div className="content">
                                    <div className="prod">
                                        <figure className="card-banner">
                                            <a>
                                                <img
                                                    src={`${thumbnail}`}
                                                    alt={`${title}`}
                                                />
                                            </a>
                                        </figure>

                                        <div className="cont">
                                            <div>
                                                <h2>{title}</h2>
                                                <p>${description}</p>
                                            </div>

                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <strong>
                                                                Price:
                                                            </strong>
                                                        </td>
                                                        <td>${price}</td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <strong>
                                                                Rating:
                                                            </strong>
                                                        </td>
                                                        <td>
                                                            <span>
                                                                {/* 
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
                                                                    <path fill="currentColor" d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480" />
                                                                </svg>
                                                                */}

                                                                {`x`.repeat(
                                                                    Math.floor(
                                                                        product.rating
                                                                    )
                                                                )}

                                                                {/* 

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
                                                                    </svg><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M480 208H308L256 48l-52 160H32l140 96l-54 160l138-100l138 100l-54-160Z" />
                                                                    <path fill="currentColor" d="M256 48v316L118 464l54-160l-140-96h172z" />
                                                                
                                                                */}
                                                                {product.rating %
                                                                    1 !==
                                                                0
                                                                    ? `
                                                                    x
                                                                        `
                                                                    : ""}
                                                            </span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <strong>
                                                                Stock:
                                                            </strong>
                                                        </td>
                                                        <td>{stock}</td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <strong>
                                                                Return Policy:
                                                            </strong>
                                                        </td>
                                                        <td>{returnPolicy}</td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <strong>
                                                                Shipping
                                                                Information:
                                                            </strong>
                                                        </td>

                                                        <td>
                                                            {
                                                                shippingInformation
                                                            }
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong>
                                                                Warranty
                                                                Information:
                                                            </strong>
                                                        </td>
                                                        <td>
                                                            {
                                                                warrantyInformation
                                                            }
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong>
                                                                Weight:
                                                            </strong>
                                                        </td>
                                                        <td>{weight}kg</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="reviews">
                                        <h3>Reviews:</h3>

                                        {reviews.map((review, index) => (
                                            <React.Fragment key={index}>
                                                <div className="review">
                                                    <div>
                                                        <img
                                                            src={`${avter1}`}
                                                            alt={`${review.reviewerName}`}
                                                        />

                                                        <p>
                                                            <strong>
                                                                {
                                                                    review.reviewerName
                                                                }
                                                            </strong>
                                                        </p>

                                                        <p>
                                                            <strong>
                                                                (
                                                                {
                                                                    review.reviewerEmail
                                                                }
                                                                )
                                                            </strong>
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <p>
                                                            <strong>
                                                                Comment:
                                                            </strong>

                                                            {review.comment}
                                                        </p>

                                                        <p className="star">
                                                            <strong>
                                                                Rating:
                                                            </strong>

                                                            <span>
                                                                {/* 
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
                                                                        <path fill="currentColor" d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480" />
                                                                    </svg>
                                                                */}
                                                                {`x`.repeat(
                                                                    Math.floor(
                                                                        review.rating
                                                                    )
                                                                )}

                                                                {/* 
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
                                                                            <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M480 208H308L256 48l-52 160H32l140 96l-54 160l138-100l138 100l-54-160Z" />
                                                                            <path fill="currentColor" d="M256 48v316L118 464l54-160l-140-96h172z" />
                                                                        </svg>
                                                                */}
                                                                {review.rating %
                                                                    1 !==
                                                                0
                                                                    ? `
                                                                        s
                                                                        `
                                                                    : ""}
                                                            </span>
                                                        </p>

                                                        <p>
                                                            <strong>
                                                                Date:
                                                            </strong>

                                                            <strong>
                                                                {new Date(
                                                                    review.date
                                                                ).toLocaleDateString()}
                                                            </strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                        ))}
                                    </div>

                                    <div className="com">
                                        <form action="#">
                                            <input
                                                type="text"
                                                name="comment"
                                                id=""
                                                placeholder="Enter your comment"
                                                required
                                            />
                                            <button>Send</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </>
            ) : (
                ""
            )}
        </>
    );
}

export default ProductDetails;
