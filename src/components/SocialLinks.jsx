import React from "react";
import "../index.css";

// Sociallink Component
const SocialLinks = () => {
    return (
        <div className="social-links">
            <div className="media">
                <a
                    href="https://www.linkedin.com/in/kevin-vang1/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="src/assets/linkedin.svg" alt="LinkedIn" />
                </a>
                <a
                    href="https://github.com/KVang2"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="src/assets/github.svg" alt="GitHub" />
                </a>
            </div>
        </div>
    );
};

export default SocialLinks;