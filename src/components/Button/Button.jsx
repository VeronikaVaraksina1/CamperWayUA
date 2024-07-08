import clsx from "clsx";
import css from "./Button.module.css"

export const Button = ({ className, children, ...props }) => {
  return <button className={clsx(css.button, className)} {...props}>{children}</button>;
};
