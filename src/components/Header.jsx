import React from "react";
import Greeting from "./Greeting";
import SocialLinks from "./SocialLinks";
import "./index.css";

// header Component
const Header = () => {
    return (
        <nav>
            <Greeting />
            <SocialLinks />
        </nav>
    );
};

export default Header;