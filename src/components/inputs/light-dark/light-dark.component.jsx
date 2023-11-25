import { useState } from "react";
import { GlobalStyle } from "./light-dark.styles";

const LightDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [mainColor, setMainColor] = useState("whitesmoke");
    const [textColor, setTextColor] = useState("black");

    const black = "#000000";
    const white = "#ffffff";
    const dark = "#2e2e2e";
    const light = "#e5e5e5";
    
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);

        if (!isDarkMode) {
            setMainColor(dark);
            setTextColor(white);
        }
        else {
            setMainColor(light);
            setTextColor(black);
        }
    }



    return (
        <>
            <GlobalStyle mainColor={mainColor} textColor={textColor} isDarkMode={isDarkMode} />
            <div>
                <input type='checkbox' onClick={toggleDarkMode} />
                <label>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</label>
            </div>
            <div>
                <h1>
                    This is some text
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
        </>
    )
}

export default LightDarkMode;