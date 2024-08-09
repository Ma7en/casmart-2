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
    // const [pageSize, setPageSize] = useState(30);

    const [searchValue, setSearchValue] = useState("");

    // category
    const [categoryValue, setCategoryValue] = useState("");
    const [categoryList, setCategoryList] = useState([]);

    // btn
    const prodContRefs = useRef([]);
    const nexBtnRefs = useRef([]);
    const preBtnRefs = useRef([]);

    // products
    useEffect(() => {
        setLoadingProduct(true);

        axiosInstance
            .get(`/products`)
            .then((respons) => {
                // console.log(respons.data.products);
                setProducts(respons.data.products);
            })
            .catch(() => {
                setErrorProduct(true);
            })
            .finally(() => {
                setLoadingProduct(false);
            });
    }, []);

    // categories
    useEffect(() => {
        setLoadingCategorie(true);

        if (!categoryValue) {
            axiosInstance
                .get(`/products/categories`)
                .then((respons) => {
                    // console.log(respons.data);
                    setCategories(respons.data);
                })
                .catch(() => {
                    setErrorCategorie(true);
                })
                .finally(() => {
                    setLoadingCategorie(false);
                });
        } else {
            axiosInstance
                .get(`/products/category/${categoryValue}`)
                .then((respons) => {
                    console.log(respons.data.products);
                    setProducts(respons.data.products);
                })
                .catch(() => {
                    setErrorCategorie(true);
                })
                .finally(() => {
                    setLoadingCategorie(false);
                });
        }
    }, [categoryValue]);

    //
    function handleCategory(e) {
        // console.log(`-->--`, e.target.innerText);
        setCategoryValue(e.target.innerText);
    }

    // all
    // function handleAll(e) {}

    // btn
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

    // limt
    // const limitProducts = (products) => {
    //     // console.log(`-->--`, products);
    //     return products.slice(0, 10);
    // };

    // // search
    // const handleSearch = (e) => {
    //     setSearchValue(e.target.value);
    // };

    // const filteredProducts = products.filter((product) =>
    //     product.name.toLowerCase().includes(searchValue.toLowerCase())
    // );

    // // render
    // if (loadingProduct) return <p>Loading...</p>;
    // if (errorProduct) return <p>Error loading products.</p>;

    // if (loadingCategorie) return <p>Loading...</p>;
    // if (errorCategorie) return <p>Error loading categories.</p>;
    useEffect(() => {
        setLoadingProduct(true);

        axiosInstance
            .get(`/products`)
            .then((respons) => {
                console.log(respons);
                // setProducts(respons.data.products);
            })
            .catch(() => {
                setErrorProduct(true);
            })
            .finally(() => {
                setLoadingProduct(false);
            });
    }, []);

    return (
        <>
            <section className="section product" id="product">
                <div className="container">
                    <h2 className="h2 section-title">Products of the week</h2>

                    <div className="nav-categories">
                        <button
                            className="pre-btn"
                            ref={(el) => (preBtnRefs.current[0] = el)}
                            onClick={(e) => handlePrevClick(0)}
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
                            {/* <li>All</li> */}
                            {categories.map((categorie, index) => (
                                <React.Fragment key={index}>
                                    <li
                                        onClick={(e) => {
                                            handleCategory(e);
                                        }}
                                    >
                                        {categorie.name}
                                    </li>
                                </React.Fragment>
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
        </>
    );
}

export default Products;
