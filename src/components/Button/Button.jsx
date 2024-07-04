import css from "./Button.module.css"

export const Button = ({ children, ...props }) => {
  return <button className={css.button} {...props}>{children}</button>;
};
