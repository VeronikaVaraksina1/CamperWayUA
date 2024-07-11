import css from "./Navigation.module.css"
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className={css.navigation}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </nav>
  );
};
