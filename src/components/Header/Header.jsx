import { Navigation } from "../Navigation/Navigation";

export const Header = ({ children }) => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
    </>
  );
};
