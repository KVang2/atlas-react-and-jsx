import React from "react";
import "../index.css";
import openIcon from "../assets/open.svg";

const OpenLink = ({ link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={openIcon} alt="Open link" />
        </a>
    );
};

export default OpenLink;