import css from "./Navigation.module.css";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className={css.navigation}>
      <NavLink className={css.logoLink} to="/">
        <img className={css.logo} src={logo} alt="logo" />
        CamperWay
      </NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </nav>
  );
};
