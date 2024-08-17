/* eslint-disable no-unused-vars */
import React from "react";

// assets
import blog3 from "../../assets/images/blog/blog-3.jpg";

function Hero() {
    return (
        <>
            <section
                className="hero"
                id="home"
                style={{ backgroundImage: `url(${blog3})` }}
            >
                <div className="container">
                    <div className="hero-content">
                        <p className="hero-subtitle">Fashion Everyday</p>

                        <h2 className="h1 hero-title">
                            Unrivalled Fashion House
                        </h2>

                        <a href="#product" className="btn btn-primary">
                            Shop Now
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
