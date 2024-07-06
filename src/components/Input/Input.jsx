import clsx from "clsx";
import css from "./Input.module.css"

export const Input = ({ className, ...props }) => {
  return (
    <input className={clsx(css.input, className)} {...props} />
  )
};
