/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { useSelector } from "react-redux";

// styles
import "./Modlecard.scss";

// context
import themeContext from "../../context/themeContext";
import languageContext from "../../context/languageContext";

// components
import Shop from "../../components/shopping/Shop";

function ShoppingCard() {
    const { shoppingList, totalPrice, totalCount } = useSelector(
        (state) => state.shoppingList
    );

    // console.log(`sho`, shoppingList, totalPrice, totalCount);

    const { darkMode, setDarkMode } = useContext(themeContext);
    const { language, setLanguage } = useContext(languageContext);

    return (
        <>
            <div className="model-cart">
                <div className="container">
                    {/* <div className="title">
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
                    </div> */}

                    <div className="list-products" id="list-products">
                        {totalCount === 0
                            ? ""
                            : shoppingList.map((shop, index) => (
                                  <React.Fragment key={index}>
                                      <Shop shop={shop} />
                                  </React.Fragment>
                              ))}
                    </div>

                    {totalCount !== 0 && (
                        <div id="total">
                            Total Price: ${totalPrice.toFixed(2)}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default ShoppingCard;
