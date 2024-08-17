import { useState } from "react";
import { Provider } from "react-redux";

// style
import "./scss/App.scss";

// store
import store from "./store/store";

// context
import loginContext from "./context/loginContext";
import themeContext from "./context/themeContext";
import languageContext from "./context/languageContext";

// routes
import AppRoute from "./routes/Router";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState("en");
    const [login, setLogin] = useState({});

    return (
        <>
            <Provider store={store}>
                <loginContext.Provider value={{ login, setLogin }}>
                    <themeContext.Provider value={{ darkMode, setDarkMode }}>
                        <languageContext.Provider
                            value={{ language, setLanguage }}
                        >
                            <AppRoute />
                        </languageContext.Provider>
                    </themeContext.Provider>
                </loginContext.Provider>
            </Provider>
        </>
    );
}

export default App;
