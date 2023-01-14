import React from "react";
import {parseInteger} from "jsdom/lib/jsdom/living/helpers/strings.js";

function Petitioner(props) {
    return (
        <div>
            <p>{props.petitioner.time}</p>
        </div>
    )
}

function PetitionersQueue() {
    const petitioners = [
        {time: 1},
        {time: 2},
        {time: 3},
        {time: 4},
        {time: 5},
        {time: 6},
    ];
    return (
        <div>
            {petitioners.map((petitioner) => (
                <Petitioner key={petitioner.time} petitioner={petitioner} />
            ))}
        </div>
    )
}

function InputFields() {
    return (
        <div>
            <label htmlFor="queues">Number of queues</label>
            <input type="number" id="queues" name="queues" min="1" max="10" />
            <br></br>
            <label htmlFor="min">Min</label>
            <input type="number" id="min" />
            <br></br>
            <label htmlFor="max">Max</label>
            <input type="number" id="max" />
        </div>
    )
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (parseInteger(max) - parseInteger(min) + 1)) + parseInteger(min);
}

function NextButton() {
    const getMinMax = () => {
        const min = document.getElementById('min').value;
        const max = document.getElementById('max').value;
        console.log(generateRandomNumber(min, max));
        return generateRandomNumber(min, max);

        // change scene to Queue

    };

    return (
        <div>
            <button onClick={getMinMax}>Next</button>
        </div>
    );
}

function Configuration() {
    return (
        <div>
            <h1>Configuration</h1>
            <InputFields />
            <NextButton />
        </div>
    )
}

export default Configuration;
