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
              numberOfQueues: e.currentTarget.value,
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
        <input type="number" id="min" />
      </div>
      <div>
        <label htmlFor="max">Max</label>

        <input type="number" id="max" />
      </div>
    </div>
  );
}

export default InputFields;
