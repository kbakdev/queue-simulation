import React from "react";
import {parseInteger} from "jsdom/lib/jsdom/living/helpers/strings.js";

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (parseInteger(max) - parseInteger(min) + 1)) + parseInteger(min);
}

function NextButton() {
    const getMinMax = () => {
        const min = document.getElementById('min').value;
        const max = document.getElementById('max').value;
        console.log(generateRandomNumber(min, max));
        return generateRandomNumber(min, max);
    };

    return (
        <div>
            <button onClick={getMinMax}>Next</button>
        </div>
    );
}

export default NextButton;