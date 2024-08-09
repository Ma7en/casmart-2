/* eslint-disable react/jsx-no-undef */
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Loader
import Loader from "../components/loader/Loader";
import PortfolioPage from "../pages/portfolio/PortfolioPage";

// lazy loading pages
const HomepageLayout = lazy(() =>
    import("../components/layouts/Homepagelayout")
);

const HomePage = lazy(() => import("../pages/home/HomePage"));
const ProductDetails = lazy(() =>
    import("../pages/productdetails/ProductDetails")
);

const LoginPage = lazy(() => import("../pages/login/LoginPage"));

const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

function AppRoute() {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomepageLayout />}>
                            {/* home page */}
                            <Route path="/" element={<HomePage />} />
                            <Route path="/home" element={<HomePage />} />

                            {/* login */}
                            <Route path="/login" element={<LoginPage />} />

                            {/* portfoli */}
                            <Route
                                path="/portfolio"
                                element={<PortfolioPage />}
                            />

                            {/* product  */}
                            <Route
                                path="/product/:id"
                                element={<ProductDetails />}
                            />
                        </Route>

                        {/* NotFound or Error */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </>
    );
}
export default AppRoute;
