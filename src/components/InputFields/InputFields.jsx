import React from "react";
import { useConfigurationContext } from "../../context/ConfigurationContext";

function InputFields() {
  const { setConfig, config } = useConfigurationContext();
  console.log(config);
  return (
    <div>
      <div>
        <label htmlFor="queue">Number of queues</label>
        <input
          onChange={(e) =>
            setConfig((prev) => ({
              ...prev,
                numberOfQueues: e.target.value,
            }))
          }
          value={config.numberOfQueues}
          type="number"
          id="queue"
          name="queue"
        />
      </div>
      <div>
        <label htmlFor="min">Min</label>
        <input
            onChange={(e) =>
                setConfig((prev) => ({
                    ...prev,
                    min: e.target.value,
                }))
            }
            value={config.min}
            type="number"
            id="min"
            name="min"
        />
      </div>
      <div>
        <label htmlFor="max">Max</label>

        <input onChange={(e) =>
            setConfig((prev) => ({
                ...prev,
                max: e.target.value,
            }))
        }
                value={config.max}
                type="number"
                id="max"
                name="max"
        />
      </div>
    </div>
  );
}

export default InputFields;
