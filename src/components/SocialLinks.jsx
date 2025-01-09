import React from "react";
import index.css

// Greeting Component
const Greeting = () => {

    // Get the current hour
    const hour = new Data().getHours();

    let message = "";
    let image = "";

    if (hour >= 6 && hour < 12) {
        messsage = "Good Morning!";
        image = "src/assets/day.svg"; 
    } else if (hour >= 12 && hour < 17) {
        message = "Good Afternoon!";
        image = "src/assets/day.svg";
    } else {
        message = "Good Evening!";
        image = "src/assets/night.svg";
    }

    return (
        <h1 className="greeting">
        <img src={image} alt={message} />
        {message}
    </h1>
    );
};

export default Greeting