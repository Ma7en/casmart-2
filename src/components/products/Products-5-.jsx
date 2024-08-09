/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { axiosInstance } from "../../api/config.js";
import Product from "./product/Product.jsx";

function Products() {
    const [products, setProducts] = useState([]);
    const [errorProduct, setErrorProduct] = useState(false);
    const [loadingProduct, setLoadingProduct] = useState(true);

    const [categories, setCategories] = useState([]);
    const [errorCategorie, setErrorCategorie] = useState(false);
    const [loadingCategorie, setLoadingCategorie] = useState(true);

    const [searchValue, setSearchValue] = useState("");

    // category
    const [categoryValue, setCategoryValue] = useState("");

    // btn
    const prodContRefs = useRef([]);
    const nexBtnRefs = useRef([]);
    const preBtnRefs = useRef([]);

    // Fetch all products
    const fetchAllProducts = () => {
        setLoadingProduct(true);
        axiosInstance
            .get(`/products`)
            .then((response) => {
                setProducts(response.data.products);
            })
            .catch(() => {
                setErrorProduct(true);
            })
            .finally(() => {
                setLoadingProduct(false);
            });
    };

    // Fetch products by category
    const fetchProductsByCategory = (category) => {
        setLoadingProduct(true);
        axiosInstance
            .get(`/products/category/${category}`)
            .then((response) => {
                setProducts(response.data.products);
            })
            .catch(() => {
                setErrorProduct(true);
            })
            .finally(() => {
                setLoadingProduct(false);
            });
    };

    // products
    useEffect(() => {
        fetchAllProducts();
    }, []);

    // categories
    useEffect(() => {
        setLoadingCategorie(true);
        axiosInstance
            .get(`/products/categories`)
            .then((response) => {
                setCategories(["All", ...response.data]); // Add "All" option
            })
            .catch(() => {
                setErrorCategorie(true);
            })
            .finally(() => {
                setLoadingCategorie(false);
            });
    }, []);

    // Handle category click
    const handleCategory = (e) => {
        const selectedCategory = e.target.innerText;
        setCategoryValue(selectedCategory);

        if (selectedCategory === "All") {
            fetchAllProducts(); // Fetch all products if "All" is selected
        } else {
            fetchProductsByCategory(selectedCategory); // Fetch products by selected category
        }
    };

    // Handle next and previous button clicks
    const handleNextClick = (index) => {
        const container = prodContRefs.current[index];
        const containerWidth = container.getBoundingClientRect().width;
        container.scrollLeft += containerWidth;
    };

    const handlePrevClick = (index) => {
        const container = prodContRefs.current[index];
        const containerWidth = container.getBoundingClientRect().width;
        container.scrollLeft -= containerWidth;
    };

    return (
        <section className="section product" id="product">
            <div className="container">
                <h2 className="h2 section-title">Products of the week</h2>

                <div className="nav-categories">
                    <button
                        className="pre-btn"
                        ref={(el) => (preBtnRefs.current[0] = el)}
                        onClick={() => handlePrevClick(0)}
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
                                strokeWidth="48"
                                d="M328 112L184 256l144 144"
                            />
                        </svg>
                    </button>

                    <ul
                        className="filter-list"
                        id="categories"
                        ref={(el) => (prodContRefs.current[0] = el)}
                    >
                        {categories.map((categorie, index) => (
                            <li key={index} onClick={(e) => handleCategory(e)}>
                                {categorie.name}
                            </li>
                        ))}
                    </ul>

                    <button
                        className="next-btn"
                        ref={(el) => (nexBtnRefs.current[0] = el)}
                        onClick={() => handleNextClick(0)}
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
                                strokeWidth="48"
                                d="m184 112l144 144l-144 144"
                            />
                        </svg>
                    </button>
                </div>

                <div id="searchDiv">
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search products..."
                        value={searchValue}
                        onChange={(e) => {
                            setSearchValue(e.target.value);
                        }}
                    />
                </div>

                <ul className="product-list" id="product-list">
                    {products
                        ?.filter((product) => {
                            return product.title
                                .toLowerCase()
                                .includes(searchValue.toLowerCase());
                        })
                        .map((product, index) => (
                            <React.Fragment key={index}>
                                <Product product={product} />
                            </React.Fragment>
                        ))}
                </ul>
            </div>
        </section>
    );
}

export default Products;
