import { NavLink } from "react-router-dom";
import { NavigationStyled } from "./NavigationStyled";

const Navigation = (): JSX.Element => {
  return (
    <NavigationStyled>
      <nav className="navigation-exercises">
        <NavLink to="/exercises" className={"nav-links"}>
          Exercises
        </NavLink>
        <NavLink to="/register" className={"nav-links"}>
          Register
        </NavLink>
        <NavLink to="/login" className={"nav-links"}>
          Login
        </NavLink>
        <NavLink to="*"></NavLink>
      </nav>
    </NavigationStyled>
  );
};

export default Navigation;
