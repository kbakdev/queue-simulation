import React from "react";

// save min max to local storage
function saveMinMax() {
    const min = document.getElementById('min').value;
    const max = document.getElementById('max').value;
    localStorage.setItem('min', min);
    localStorage.setItem('max', max);
    const minMax = [min, max];
    localStorage.setItem('minMax', JSON.stringify(minMax));
    return minMax;
}

// save number of queues to local storage
function saveLengthOfQueue() {
    const lengthOfQueue = document.getElementById('queue').value;
    localStorage.setItem('queue', lengthOfQueue);
    return lengthOfQueue;
}

function NextButton() {
    const saveConfiguration = () => {
        const minMax = saveMinMax();
        console.log(minMax);
        const numberOfQueues = saveLengthOfQueue();
        console.log(numberOfQueues);
    };

    return (
        <div>
            <button onClick={saveConfiguration}>Next</button>
        </div>
    );
}

export default NextButton;