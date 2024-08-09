/* eslint-disable no-unused-vars */
import React from "react";

import category1 from "../../assets/images/category/category-1.jpg";
import category2 from "../../assets/images/category/category-2.jpg";
import category3 from "../../assets/images/category/category-3.jpg";
import category4 from "../../assets/images/category/category-4.jpg";
import category5 from "../../assets/images/category/category-5.jpg";
import category6 from "../../assets/images/category/category-6.jpg";

function Category() {
    return (
        <>
            <section className="section category">
                <div className="container">
                    <ul className="category-list">
                        <li className="category-item">
                            <figure className="category-banner">
                                <img
                                    src={`${category1}`}
                                    alt="Sunglass & eye"
                                    loading="lazy"
                                    width="510"
                                    height="600"
                                    className="w-100"
                                />
                            </figure>

                            <a href="#" className="btn btn-secondary">
                                Sunglass & Eye
                            </a>
                        </li>

                        <li className="category-item">
                            <figure className="category-banner">
                                <img
                                    src={`${category2}`}
                                    alt="Active & outdoor"
                                    loading="lazy"
                                    width="510"
                                    height="600"
                                    className="w-100"
                                />
                            </figure>

                            <a href="#" className="btn btn-secondary">
                                Active & Outdoor
                            </a>
                        </li>

                        <li className="category-item">
                            <figure className="category-banner">
                                <img
                                    src={`${category3}`}
                                    alt="Winter wear"
                                    loading="lazy"
                                    width="510"
                                    height="600"
                                    className="w-100"
                                />
                            </figure>

                            <a href="#" className="btn btn-secondary">
                                Winter Wear
                            </a>
                        </li>

                        <li className="category-item">
                            <figure className="category-banner">
                                <img
                                    src={`${category4}`}
                                    alt="Exclusive footwear"
                                    loading="lazy"
                                    width="510"
                                    height="600"
                                    className="w-100"
                                />
                            </figure>

                            <a href="#" className="btn btn-secondary">
                                Exclusive Footwear
                            </a>
                        </li>

                        <li className="category-item">
                            <figure className="category-banner">
                                <img
                                    src={`${category5}`}
                                    alt="Jewelry"
                                    loading="lazy"
                                    width="510"
                                    height="600"
                                    className="w-100"
                                />
                            </figure>

                            <a href="#" className="btn btn-secondary">
                                Jewelry
                            </a>
                        </li>

                        <li className="category-item">
                            <figure className="category-banner">
                                <img
                                    src={`${category6}`}
                                    alt="Sports cap"
                                    loading="lazy"
                                    width="510"
                                    height="600"
                                    className="w-100"
                                />
                            </figure>

                            <a href="#" className="btn btn-secondary">
                                Sports Cap
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Category;
