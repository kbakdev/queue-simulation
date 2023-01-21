import React from "react";
import { useForm } from "react-hook-form";
import { useConfigurationContext } from "../../context/ConfigurationContext";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
const schema = yup.object().shape({
    numberOfQueue: yup.number().required().positive().integer(),
    min: yup.number().required().positive().integer(),
    max: yup.number().required().positive().integer().min(yup.ref('min')),
}).required();
function InputFields() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { setConfig, config } = useConfigurationContext();
  const onSubmit = (data, e) => {
    e.preventDefault();
    setConfig({
      numberOfQueue: Number(data.numberOfQueue),
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
            {...register("numberOfQueue")}
        />
        <p>{errors.numberOfQueue?.message}</p>
        <label htmlFor="min">Min</label>
        <input
            type="number"
            id="min"
            {...register("min")}
        />
        <p>{errors.min?.message}</p>
        <label htmlFor="max">Max</label>
        <input
            type="number"
            id="max"
            {...register("max")}
        />
        <p>{errors.max?.message}</p>
        <input type="submit" />
    </form>
  );
}

export default InputFields;
