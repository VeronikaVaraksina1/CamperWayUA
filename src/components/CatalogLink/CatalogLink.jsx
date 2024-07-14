import icons from "../../images/icons.svg";
import css from "./CatalogLink.module.css";
import clsx from "clsx";
import { Link } from "react-router-dom";

export const CatalogLink = ({ className, children }) => {
  return (
    <Link className={clsx(css.catalog, className)} to="/catalog">
      {children}
      <svg width={20} height={20}>
        <use href={`${icons}#icon-arrow-right`}></use>
      </svg>
    </Link>
  );
};
