import { Navigation } from "../Navigation/Navigation";

export const Header = ({ children }) => {
  return (
    <header>
      <Navigation />
      {children}
    </header>
  )
};
