import React, { useEffect, useState } from "react";
import { parseInteger } from "jsdom/lib/jsdom/living/helpers/strings.js";
import QueueTable from "../QueueTable/QueueTable.jsx";
import { useConfigurationContext } from "../../context/ConfigurationContext.jsx";

// Generate random number between min and max
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const decreaseAllQueues = (queues) => {
  const decreasedQueues = Object.entries(queues).map(([key, queue]) => {
    const newQueue = queue.map((person, i) => {
      if (i === 0 && person > 0) {
        return person - 1;
      }
      return person;
    });

    const filteredZeroValues = newQueue.filter((person) => person > 0);
    return filteredZeroValues;
  });
  return Object.fromEntries(decreasedQueues.map((value, key) => [key, value]));
};
const getKeyLowestQueue = (queues) => {
  const sumAllQueue = Object.entries(queues).map(([_, queue]) =>
    queue.reduce((prev, num) => Number(prev) + Number(num), 0)
  );
  const lowestQueue = Math.min(...sumAllQueue);
  const keyLowestQueue = sumAllQueue.indexOf(lowestQueue);
  return keyLowestQueue === -1 ? 0 : keyLowestQueue;
};

function QueueList() {
  const { config } = useConfigurationContext();
  const [queue, setQueue] = useState(
    config === undefined
      ? undefined
      : Object.fromEntries(
          Array.from({ length: config.numberOfQueue }, (_, i) => [i, []])
        )
  );
  console.log(queue, "stan", config);
  const handlerReduceAllQueue = () => {
    setQueue((queues) => decreaseAllQueues(queues));
  };
  const handlerAddToQueue = () => {
    const keyLowestQueue = getKeyLowestQueue(queue);
    console.log(generateRandomNumber(config.min, config.max), config);
    setQueue((prev) => {
      return {
        ...prev,
        [keyLowestQueue]: [
          ...prev[keyLowestQueue],
          generateRandomNumber(Number(config.min), Number(config.max)),
        ],
      };
    });
  };
  if (!config) return <h2>Set Configuration!</h2>;
  return (
    <>
      <div>
        <button onClick={handlerAddToQueue}>Add new person to queue</button>
        <button onClick={handlerReduceAllQueue}>Reduce queues</button>
      </div>

      <ol>
        <QueueTable />
      </ol>
    </>
  );
}

export default QueueList;
