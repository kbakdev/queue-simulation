import React from "react";
import { useForm } from "react-hook-form";
import { useConfigurationContext } from "../../context/ConfigurationContext";

function InputFields() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { setConfig, config } = useConfigurationContext();
  const onSubmit = (data, e) => {
    e.preventDefault();
    setConfig({
      numberOfQueue: Number(data.queue),
      min: Number(data.min),
      max: Number(data.max),
    });
  };
  console.log(config);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="queue">Number of queues</label>
        <input type="number" {...register("queue")} />
      </div>
      <div>
        <label htmlFor="min">Min</label>
        <input type="number" {...register("min")} />
      </div>
      <div>
        <label htmlFor="max">Max</label>

        <input type="number" {...register("max")} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default InputFields;
