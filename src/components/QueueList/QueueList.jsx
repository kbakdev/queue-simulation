import React, {useState} from "react";
import {useConfigurationContext} from "../../context/ConfigurationContext.jsx";
import './QueueList.scss';
import {parseInteger} from "jsdom/lib/jsdom/living/helpers/strings.js";
import {Link} from "react-router-dom";
import * as Constants from "../Navbar/Constants.jsx";

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

    return newQueue.filter((person) => person > 0);
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
  const handlerReduceAllQueue = () => {
    setQueue((queues) => decreaseAllQueues(queues));
  };
  const handlerAddToQueue = () => {
    const keyLowestQueue = getKeyLowestQueue(queue);
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
  if (!config) return <h2>Please, set <Link to={Constants.CONFIGURATION}>configuration</Link></h2>;
  return (
    <>
      <div>
        <button onClick={handlerAddToQueue}>Add new person to queue</button>
        <button onClick={handlerReduceAllQueue}>Reduce queues</button>
      </div>

      <ul>
        {Object.entries(queue).map(([queue, persons]) => {
          if (persons) {
            return (
              <li>
                <img
                    src="src/assets/laptop.png"
                    alt="laptop"
                />
                <div id="sum">Sum: {persons.reduce((prev, num) => Number(prev) + Number(num), 0)}</div>
                <div id="queue">Queue no. <b>{parseInteger(queue)+1}</b>{persons.join(", ")}</div>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
}

export default QueueList;
