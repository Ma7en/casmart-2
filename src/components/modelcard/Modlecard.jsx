/* eslint-disable no-unused-vars */
import React from "react";
import "./Modlecard.scss";

function Modlecard() {
    return (
        <>
            <div className="model-cart">
                <div className="container">
                    <div className="title">
                        <h2>list-product</h2>

                        <button
                            className="model-close-btn"
                            data-nav-close-btn=""
                            aria-label="Close Menu"
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

                    <div className="list-products" id="list-products">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Aut ipsum exercitationem impedit nisi. Alias
                            labore quibusdam quidem adipisci porro cumque
                            tempora deleniti magnam, corporis, sapiente deserunt
                            expedita eos earum. A, vitae voluptas accusantium
                            dolores eaque sit est dolor sapiente in repellat
                            illo doloremque minima, eum libero animi illum
                            blanditiis qui?
                        </p>
                    </div>

                    <div id="total">ddd</div>
                </div>
            </div>
        </>
    );
}

export default Modlecard;
