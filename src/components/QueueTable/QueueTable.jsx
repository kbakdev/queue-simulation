import React from "react";
import {parseInteger} from "jsdom/lib/jsdom/living/helpers/strings.js";

// Get Numbers of Queues from Local Storage
function getNumberOfQueues() {
    return parseInteger(localStorage.getItem("queue"));
}

// Generate Table with the number of queues and index
function QueueTables() {
    const numberOfQueues = getNumberOfQueues();
    const queueTables = [];
    for (let i = 0; i < numberOfQueues; i++) {
        queueTables.push(<QueueTable key={i} />);
    }
    return queueTables;
}


function generateQueueSum() {
    const queue = document.getElementById('queue');
    const queueArray = queue.innerHTML.split(" ");

    // parse div queue to array
    for (let i = 0; i < queueArray.length; i++) {
        queueArray[i] = queueArray[i].split(",");
    }

    let queueSum = 0;
    for (let i = 0; i < queueArray.length; i++) {
        for (let j = 0; j < queueArray[i].length; j++) {
            queueSum += parseInteger(queueArray[i][j]);
        }
    }

    return queueSum;
}

// Generate Cell of a Table that contains the sum of the queue
function QueueCell() {
    return (
        <>
            <td>
                SUM: <div className="sum">{generateQueueSum()}</div>
            </td>
            <br></br>
            <td>
                QUEUE: <div id="queue"></div>
            </td>
        </>
    );
}

function QueueTable() {
    return (
        <li>
            <QueueCell />
        </li>
    );
}

export default QueueTables;