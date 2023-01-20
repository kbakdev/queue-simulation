import React from "react";
import {parseInteger} from "jsdom/lib/jsdom/living/helpers/strings.js";
import QueueTable from "../QueueTable/QueueTable.jsx";
import {useQueueListContext} from "../../context/QueueListContext.jsx";
import {useConfigurationContext} from "../../context/ConfigurationContext.jsx";

// Generate random number between min and max
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function countQueues() {
    const queue = document.getElementById('queue');
    const queueArray = queue.innerHTML.split(",");
    console.log(queueArray.length);
    return queueArray.length;
}

function findQueueWithTheLowestSum() {
    const queueSum = document.getElementById('sum');
    console.log(queueSum);
    const queueSumArray = queueSum.innerHTML.split(" ");
    console.log(queueSumArray);

    let lowestSum = parseInteger(queueSumArray[0]);
    console.log(lowestSum);

    // check other sums and find the lowest one
    for (let i = 1; i < queueSumArray.length; i++) {
        if (parseInteger(queueSumArray[i]) < lowestSum) {
            lowestSum = parseInteger(queueSumArray[i]);
            console.log(lowestSum);
        }
    }

    console.log(lowestSum);
    return lowestSum;
}

function findQueueWithTheLowestSumByKey() {
    const { queues } = useQueueListContext()

    let lowestSum = 0;
    let lowestSumKey = 0;

    for (const [key, value] of Object.entries(queues)) {
        const sum = value.reduce((a, b) => a + b, 0);
        if (sum < lowestSum) {
            lowestSum = sum;
            lowestSumKey = key;
        }
    }

    return lowestSumKey;
}


// Generate random person to queue with the lowest sum which is saved
function addToQueueWithLowestSum() {
    const { queues, setQueues } = useQueueListContext()
    const { config } = useConfigurationContext()

    // Generate random number between min and max
    const randomNumber = generateRandomNumber(config.min, config.max);

    // Find queue with the lowest sum
    const lowestSumKey = findQueueWithTheLowestSumByKey();

    // Add random number to queue with the lowest sum
    queues[lowestSumKey].push(randomNumber);
    setQueues(queues);
}

// Decrease sum and first number from array of every queue by 1
function removeFromQueue() {
    const queueSum = document.getElementsByClassName('sum');
    const queueSumArray = queueSum.innerHTML.split(" ");

    const queue = document.getElementsByClassName('queue');
    const queueArray = queue.innerHTML.split(" ");

    // parse div queue to array
    for (let i = 0; i < queueArray.length; i++) {
        queueArray[i] = queueArray[i].split(",");
    }

    for (let i = 0; i < queueArray.length; i++) {
        queueSumArray[i] = parseInteger(queueSumArray[i]) - 1;
        console.log(queueArray[i]);
        // get first element from array, if it's 0 then shift it, if not then decrease it by 1
        if (parseInteger(queueArray[i][0]) === 1) {
            queueArray[i].shift();
        } else {
            queueArray[i][0] = parseInteger(queueArray[i][0]) - 1;
        }
    }

    queueSum.innerHTML = queueSumArray.join(",");
    queue.innerHTML = queueArray.join(",");
}

function QueueList() {
    const { queues, setQueues } = useQueueListContext()

    const handleAddToQueue = () => {
        addToQueueWithLowestSum();
    }

    const handleRemoveFromQueue = () => {
        removeFromQueue();
    }

    const handleFindQueueWithTheLowestSum = () => {
        findQueueWithTheLowestSum();
    }

    const handleAddToQueueWithLowestSum = () => {
        addToQueueWithLowestSum();
    }

    return (
        <>
            <div>
                <button onClick={handleAddToQueueWithLowestSum}>Add to queue with lowest sum</button>
                <button onClick={removeFromQueue}>Remove from queue</button>
                <button onClick={handleFindQueueWithTheLowestSum}>Find queue with the lowest sum</button>
                <button onClick={countQueues}>Count queues</button>
            </div>
            <table>
                <ol>
                    <QueueTable/>
                </ol>
            </table>
        </>
    );
}

export default QueueList;