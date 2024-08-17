import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Loader
import Loader from "../components/loader/Loader";

// lazy loading pages
const HomepageLayout = lazy(() =>
    import("../components/layouts/Homepagelayout")
);

const HomePage = lazy(() => import("../pages/home/HomePage"));

const ProductDetails = lazy(() =>
    import("../pages/productdetails/ProductDetails")
);

const ShoppingCard = lazy(() => import("../pages/shoppingcard/ShoppingCard"));

const LoginPage = lazy(() => import("../pages/login/LoginPage"));

const PortfolioPage = lazy(() => import("../pages/portfolio/PortfolioPage"));

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
                            <Route path="/casmart" element={<HomePage />} />
                            <Route path="/casmart-2" element={<HomePage />} />
                            <Route path="/product" element={<HomePage />} />

                            {/* product  */}
                            <Route
                                path="/product/:id"
                                element={<ProductDetails />}
                            />

                            {/* shopping card  */}
                            <Route
                                path="/shoppingcard"
                                element={<ShoppingCard />}
                            />
                            <Route
                                path="/shopping"
                                element={<ShoppingCard />}
                            />

                            {/* login */}
                            <Route path="/login" element={<LoginPage />} />

                            {/* portfoli */}
                            <Route
                                path="/portfolio"
                                element={<PortfolioPage />}
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
