import React from "react";
import { useForm } from "react-hook-form";
import { useConfigurationContext } from "../../context/ConfigurationContext";

function InputFields() {
  const {
    register,
    handleSubmit,
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
        <label htmlFor="queue">Number of queue</label>
        <input
            type="number"
            id="queue"
            {...register("queue", { required: true, min: 1 })}
        />
        {errors.queue && <p>Number of queue is required</p>}
        <label htmlFor="min">Min</label>
        <input
            type="number"
            id="min"
            {...register("min", { required: true, min: 1 })}
        />
        {errors.min && <p>Min is required</p>}
        <label htmlFor="max">Max</label>
        <input
            type="number"
            id="max"
            {...register("max", { required: true, min: 1 })}
        />
        {errors.max && <p>Max is required</p>}
        <input type="submit" />
    </form>
  );
}

export default InputFields;
