import React from "react";

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

export default InputFields;