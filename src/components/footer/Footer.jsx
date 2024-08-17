/* eslint-disable no-unused-vars */
import React, { useState } from "react";

// style
import "./Footer.scss";

// assets
import payment from "../../assets/images/footer/payment-img.png";

function Footer() {
    const [dataYear, setDataYear] = useState(new Date().getFullYear());

    return (
        <>
            <footer className="footer" id="footer">
                <div className="container">
                    <p className="copyright">
                        &copy; <span className="data-year">{dataYear}</span>
                        <a href="#">Mazen Saad</a>. All Rights Reserved
                    </p>

                    <ul className="footer-bottom-list">
                        <li>
                            <a href="#" className="footer-bottom-link">
                                Privacy Policy
                            </a>
                        </li>

                        <li>
                            <a href="#" className="footer-bottom-link">
                                Terms & Conditions
                            </a>
                        </li>

                        <li>
                            <a href="#" className="footer-bottom-link">
                                Sitemap
                            </a>
                        </li>
                    </ul>

                    <div className="payment">
                        <p className="payment-title">We Support</p>

                        <img
                            src={`${payment}`}
                            alt="Online payment logos"
                            className="payment-img"
                        />
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
