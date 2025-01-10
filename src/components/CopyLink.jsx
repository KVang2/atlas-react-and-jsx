import React from "react";
import "../index.css";
import copyIcon from "../assets/copy.svg";

const CopyLink = ({ link }) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(link)
        .then(() => {
            alert("Link copied to clipboard!");
        })
        .catch((err) => {
            console.error("Failed to copy link:", err);
        });
    };

    return (
        <img className="copy"
        src={copyIcon}
        alt="Copy link"
        onClick={handleCopy}
        />
    );
};

export default CopyLink;