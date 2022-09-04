import { NavLink } from "react-router-dom";
import { NavigationStyled } from "./NavigationStyled";

const Navigation = (): JSX.Element => {
  return (
    <NavigationStyled>
      <nav className="navigation-exercises">
        <div className="logo">
          <img
            className="logo__image"
            alt="The Wod Builder logo"
            height="24"
            width="218"
            src="../../../public/img/TheWodBuilderLogoNegro.png"
          ></img>
        </div>
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
