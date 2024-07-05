import css from "./Input.module.css"

export const Input = ({ ...props }) => {
  return (
    <input className={css.input} {...props} />
  )
};
