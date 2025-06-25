import React from "react";

function ClickableButton() {
    function handleClick() {
        alert('You clicked!');
    }

    return (
        <button onClick={handleClick}>
            Click me to see a message!
        </button>
    )
}

export default ClickableButton;