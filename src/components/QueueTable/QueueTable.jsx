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

// Generate Cell of a Table that contains the sum of the queue
function QueueCell() {
    return (
        <>
            <td>
                SUM: <div className="sum">0</div>
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