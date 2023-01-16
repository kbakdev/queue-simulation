import React from "react";

function QueueList(props) {
    const {queues, onQueueSelect} = props;

    const queueList = queues.map((queue) => {
        const {id, name, description} = queue;
        return (
            <li key={id} onClick={() => onQueueSelect(id)}>
                <h3>{name}</h3>
                <p>{description}</p>
            </li>
        );
    });

    return (
        <>
            <h1>Queue List</h1>
            <ul>{queueList}</ul>
        </>
    );
}

export default QueueList;