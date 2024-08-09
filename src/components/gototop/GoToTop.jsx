/* eslint-disable no-unused-vars */
import React from "react";
import "./GoToTop.scss";

function GoToTop() {
    return (
        <>
            <a className="go-to-top" id="go-to-top">
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
                        d="m112 328l144-144l144 144"
                    />
                </svg>
                {/* <!-- <svg class="">
        <use href="./images/icons/icons.svg#icon-go-to-top"></use>
    </svg> --> */}
            </a>
        </>
    );
}

export default GoToTop;
