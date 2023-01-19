import React from "react";

function InputFields() {
    return (
        <div>
            <label htmlFor="queue">Number of queues</label>
            <input type="number" id="queue" name="queue"/>
            <br></br>
            <label htmlFor="min">Min</label>
            <input type="number" id="min" />
            <br></br>
            <label htmlFor="max">Max</label>
            <input type="number" id="max" />
        </div>
    )
}

export default InputFields;