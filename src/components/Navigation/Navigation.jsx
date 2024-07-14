import css from "./Navigation.module.css";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

export const Navigation = () => {
  return (
    <nav className={css.navigation}>
      <NavLink 
        className={css.logoLink} to="/">
        <img className={css.logo} src={logo} alt="logo" />
        CamperWay
      </NavLink>
      <NavLink 
        className={({ isActive }) => {
          return clsx(css.link, isActive && css.isActive);
        }} to="/">Home</NavLink>
      <NavLink 
        className={({ isActive }) => {
          return clsx(css.link, isActive && css.isActive);
        }} to="/catalog">Catalog</NavLink>
      <NavLink 
        className={({ isActive }) => {
          return clsx(css.link, isActive && css.isActive);
        }} 
        to="/favorites">Favorites</NavLink>
    </nav>
  );
};
