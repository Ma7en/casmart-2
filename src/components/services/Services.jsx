/* eslint-disable no-unused-vars */
import React from "react";

// assets
import serviceicon1 from "../../assets/images/services/service-icon-1.svg";
import serviceicon2 from "../../assets/images/services/service-icon-2.svg";
import serviceicon3 from "../../assets/images/services/service-icon-3.svg";
import serviceicon4 from "../../assets/images/services/service-icon-4.svg";

function Services() {
    return (
        <>
            <section className="service" id="service">
                <div className="container">
                    <ul className="service-list">
                        <li className="service-item">
                            <div className="service-item-icon">
                                <img
                                    src={`${serviceicon1}`}
                                    alt="Service icon"
                                />
                            </div>

                            <div className="service-content">
                                <p className="service-item-title">
                                    Free Shipping
                                </p>

                                <p className="service-item-text">
                                    On All Order Over $599
                                </p>
                            </div>
                        </li>

                        <li className="service-item">
                            <div className="service-item-icon">
                                <img
                                    src={`${serviceicon2}`}
                                    alt="Service icon"
                                />
                            </div>

                            <div className="service-content">
                                <p className="service-item-title">
                                    Easy Returns
                                </p>

                                <p className="service-item-text">
                                    30 Day Returns Policy
                                </p>
                            </div>
                        </li>

                        <li className="service-item">
                            <div className="service-item-icon">
                                <img
                                    src={`${serviceicon3}`}
                                    alt="Service icon"
                                />
                            </div>

                            <div className="service-content">
                                <p className="service-item-title">
                                    Secure Payment
                                </p>

                                <p className="service-item-text">
                                    100% Secure Gaurantee
                                </p>
                            </div>
                        </li>

                        <li className="service-item">
                            <div className="service-item-icon">
                                <img
                                    src={`${serviceicon4}`}
                                    alt="Service icon"
                                />
                            </div>

                            <div className="service-content">
                                <p className="service-item-title">
                                    Special Support
                                </p>

                                <p className="service-item-text">
                                    24/7 Dedicated Support
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Services;
