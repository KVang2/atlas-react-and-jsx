import "./index.css";
import React from "react";
import ReactDom from "react-dom/client";
import App from './App';

// Render the App component to the root element

// Get root element
const rootElement = document.getElementById("root");

// Create React root
const root = ReactDom.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);