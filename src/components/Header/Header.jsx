import css from "./Header.module.css"
import { Navigation } from "../Navigation/Navigation";

export const Header = ({ children }) => {
  return (
    <>
      <header className={css.header}>
        <Navigation />
      </header>
      <main>{children}</main>
    </>
  );
};
