/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { axiosInstance } from "../../api/config.js";
import Product from "./product/Product.jsx";

function Products() {
    // products
    const [products, setProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);
    const [errorProduct, setErrorProduct] = useState(false);
    const [loadingProduct, setLoadingProduct] = useState(true);

    // categories
    const [categories, setCategories] = useState([]);
    const [errorCategorie, setErrorCategorie] = useState(false);
    const [loadingCategorie, setLoadingCategorie] = useState(true);

    // search
    const [searchValue, setSearchValue] = useState("");

    // category
    const [categoryValue, setCategoryValue] = useState("");

    // pages
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    // btn next and pre
    const prodContRefs = useRef([]);
    const nexBtnRefs = useRef([]);
    const preBtnRefs = useRef([]);

    // Fetch products based on selected category
    useEffect(() => {
        setLoadingProduct(true);

        const skip = (currentPage - 1) * productsPerPage;

        let url = categoryValue
            ? `/products/category/${categoryValue}?limit=${productsPerPage}&skip=${skip}`
            : `/products?limit=${productsPerPage}&skip=${skip}`;

        axiosInstance
            .get(url)
            .then((response) => {
                setProducts(response.data.products);
                setTotalProducts(response.data.total);
            })
            .catch(() => {
                setErrorProduct(true);
            })
            .finally(() => {
                setLoadingProduct(false);
            });
    }, [currentPage, categoryValue]);

    // Fetch categories
    useEffect(() => {
        setLoadingCategorie(true);

        axiosInstance
            .get(`/products/categories`)
            .then((response) => {
                setCategories(response.data);
            })
            .catch(() => {
                setErrorCategorie(true);
            })
            .finally(() => {
                setLoadingCategorie(false);
            });
    }, []);

    // handle Category
    // function handleCategoryAll(e) {
    //     setCategoryValue("All");
    //     // setCurrentPage(1);
    // }

    function handleCategory(e) {
        setCategoryValue(e.target.innerText);
        setCurrentPage(1); // Reset to first page when changing category
    }

    // hadle btns
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

    // pagination
    const handlePageChange = (newPage) => {
        if (
            newPage > 0 &&
            newPage <= Math.ceil(totalProducts / productsPerPage)
        ) {
            setCurrentPage(newPage);
        }
    };

    if (loadingCategorie) return <p>Loading...</p>;

    return (
        <>
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
                            {/* <li onClick={(e) => handleCategoryAll(e)}>All</li> */}

                            {categories.map((categorie, index) => (
                                <React.Fragment key={index}>
                                    <li onClick={(e) => handleCategory(e)}>
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
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                    </div>

                    <ul className="product-list" id="product-list">
                        {products
                            ?.filter((product) =>
                                product.title
                                    .toLowerCase()
                                    .includes(searchValue.toLowerCase())
                            )
                            .map((product, index) => (
                                <React.Fragment key={index}>
                                    <Product product={product} />
                                </React.Fragment>
                            ))}
                    </ul>

                    {/* Pagination Controls */}
                    <div className="pagination">
                        <button
                            className="btn btn-primary"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>

                        <span className="currentPage">{currentPage}</span>

                        <button
                            className="btn btn-primary"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={
                                currentPage >=
                                Math.ceil(totalProducts / productsPerPage)
                            }
                        >
                            Next
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Products;
