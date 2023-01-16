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

export default Petitioner;
