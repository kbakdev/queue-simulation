import React, { useEffect, useState } from "react";
import { parseInteger } from "jsdom/lib/jsdom/living/helpers/strings.js";
import QueueTable from "../QueueTable/QueueTable.jsx";
import { useConfigurationContext } from "../../context/ConfigurationContext.jsx";

// Generate random number between min and max
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getKeyLowestQueue = (queues) => {
  const sumAllQueue = Object.entries(queues).map(([_, queue]) =>
    queue.reduce((prev, num) => Number(prev) + Number(num), 0)
  );
  const lowestQueue = Math.min(...sumAllQueue);
  const keyLowestQueue = sumAllQueue.indexOf(lowestQueue);
  console.log({ lowestQueue, keyLowestQueue, sumAllQueue });
  return keyLowestQueue === -1 ? 0 : keyLowestQueue;
};

function QueueList() {
  const { config } = useConfigurationContext();
  const [queue, setQueue] = useState(
    config === undefined
      ? undefined
      : Object.fromEntries(
          Array.from({ length: config.numberOfQueues }, (_, i) => [i, []])
        )
  );
  console.log(queue);
  const handlerAddToQueue = () => {
    const keyLowestQueue = getKeyLowestQueue(queue);
    setQueue((prev) => {
      console.log(prev, "prev", prev[keyLowestQueue], keyLowestQueue);
      return {
        ...prev,
        [keyLowestQueue]: [
          ...prev[keyLowestQueue],
          generateRandomNumber(config.min, config.max),
        ],
      };
    });
  };
  if (!config) return <h2>Set Configuration!</h2>;
  return (
    <>
      <div>
        <button onClick={handlerAddToQueue}>Add new person to queue</button>
      </div>

      <ol>
        <QueueTable />
      </ol>
    </>
  );
}

export default QueueList;
