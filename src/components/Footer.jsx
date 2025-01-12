import React from "react";
import "../index.css";
import links from "../assets/links.json";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.link} target="_blank" rel="noopener noreferrer">
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
            <p>
                @ {currentYear} Atlas School
            </p>
        </footer>
    );
};

export default Footer;