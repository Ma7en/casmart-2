import { Outlet } from "react-router-dom";

// components
import Header from "../header/Header";
import GoToTop from "../gototop/GoToTop";

function HomepageLayout() {
    return (
        <>
            <Header />
            <GoToTop />
            <Outlet />
        </>
    );
}

export default HomepageLayout;
