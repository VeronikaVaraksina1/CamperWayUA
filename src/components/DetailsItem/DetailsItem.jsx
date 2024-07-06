import css from "./DetailsItem.module.css"

export const DetailsItem = ({ children }) => {
  return <p className={css.item}>{children}</p>;
};
