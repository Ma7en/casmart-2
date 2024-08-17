/* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// style
import "./portfolio.scss";

// context
import loginContext from "../../context/loginContext";

// components
import Portfolio from "../../components/portfolio/Portfolio";

function PortfolioPage() {
    const navigate = useNavigate();
    const { login, setLogin } = useContext(loginContext);

    useEffect(() => {
        if (!login.id) {
            navigate(`/login`);
        }
    }, [login, navigate]);

    return (
        <>
            <main>
                <Portfolio />
            </main>
        </>
    );
}

export default PortfolioPage;
