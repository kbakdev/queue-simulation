import React from "react";
import {parseInteger} from "jsdom/lib/jsdom/living/helpers/strings.js";
import QueueTable from "../QueueTable/QueueTable.jsx";

// Generate random number between min and max
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Find Queue with the lowest sum and return index
function findQueueWithTheLowestSumByKey() {
    const queueSum = document.getElementById('sum');
    const queueSumArray = queueSum.innerHTML.split(" ");

    let lowestSum = parseInteger(queueSumArray[0]);
    let lowestSumKey = 0;

    for (let i = 1; i < queueSumArray.length; i++) {
        if (parseInteger(queueSumArray[i]) < lowestSum) {
            lowestSum = parseInteger(queueSumArray[i]);
            lowestSumKey = i;
        }
    }

    console.log(lowestSumKey);
    return lowestSumKey;
}

function makeQueueArray(howMuchQueues) {
    const queue = document.getElementById('queue');
    const queueArray = queue.innerHTML.split(" ");

    // parse div queue to array
    for (let i = 0; i < queueArray.length; i++) {
        queueArray[i] = queueArray[i].split(",");
    }

    console.log(queueArray);
}

function countQueues() {
    const queue = document.getElementById('queue');
    const queueArray = queue.innerHTML.split(",");
    console.log(queueArray.length);
    return queueArray.length;
}

// Generate random person to queue with the lowest sum which is saved
function addToQueueWithLowestSum() {
    const min = parseInteger(localStorage.getItem("min"));
    const max = parseInteger(localStorage.getItem("max"));
    const randomPerson = generateRandomNumber(min, max);

    const queueSum = document.getElementById('sum');
    const queueSumArray = queueSum.innerHTML.split(" ");

    const queue = document.getElementById('queue');
    const queueArray = queue.innerHTML.split(" ");

    // parse div queue to array
    for (let i = 0; i < queueArray.length; i++) {
        queueArray[i] = queueArray[i].split(",");
    }

    const lowestSumKey = findQueueWithTheLowestSumByKey();

    queueArray[lowestSumKey].push(randomPerson);
    queueSumArray[lowestSumKey] = parseInteger(queueSumArray[lowestSumKey]) + randomPerson;

    queueSum.innerHTML = queueSumArray.join(" ");
    queue.innerHTML = queueArray.join(" ");

    // if first element is empty, then delete it
    if (queueArray[lowestSumKey][0] === "") {
        queueArray[lowestSumKey].shift();
        // remove , from div id queue
        queue.innerHTML = queueArray.join(" ");
    }

    console.log(queueArray);
}

// Check which queue has the lowest sum
function findQueueWithTheLowestSum() {
    const queueSum = document.getElementById('sum');
    const queueSumArray = queueSum.innerHTML.split(" ");

    let lowestSum = parseInteger(queueSumArray[0]);
    let lowestSumKey = 0;

    for (let i = 1; i < queueSumArray.length; i++) {
        if (parseInteger(queueSumArray[i]) < lowestSum) {
            lowestSum = parseInteger(queueSumArray[i]);
            lowestSumKey = i;
        }
    }

    console.log(lowestSumKey);
    return lowestSumKey;
}

// Decrease sum and first number from array of every queue by 1
function removeFromQueue() {
    const queueSum = document.getElementById('sum');
    const queueSumArray = queueSum.innerHTML.split(" ");

    const queue = document.getElementById('queue');
    const queueArray = queue.innerHTML.split(" ");

    // parse div queue to array
    for (let i = 0; i < queueArray.length; i++) {
        queueArray[i] = queueArray[i].split(",");
    }

    for (let i = 0; i < queueArray.length; i++) {
        queueSumArray[i] = parseInteger(queueSumArray[i]) - 1;
        queueArray[i].shift();
    }

    queueSum.innerHTML = queueSumArray.join(",");
    queue.innerHTML = queueArray.join(",");
}

function QueueList() {
    return (
        <>
            <div>
                <button onClick={addToQueueWithLowestSum}>Add new person to queue</button>
                <button onClick={removeFromQueue}>Remove from queue</button>
                <button onClick={findQueueWithTheLowestSumByKey}>Find queue with the lowest sum</button>
                <button onClick={findQueueWithTheLowestSum}>findQueueWithTheLowestSum</button>
                <button onClick={makeQueueArray}>Make queue array</button>
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