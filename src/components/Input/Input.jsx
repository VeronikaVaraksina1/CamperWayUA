import clsx from "clsx";
import css from "./Input.module.css"
import { FormErrorMessages } from "../FormErrorMessages/FormErrorMessages";

export const Input = ({ className, name, register, errors, ...props }) => {
  return (
    <div>
      <input className={clsx(css.input, className)} {...register({name})} {...props} />
      {errors?.[name] && (<FormErrorMessages>{errors?.[name].message}</FormErrorMessages>)}
    </div>
  )
};
