import { NavLink } from "react-router-dom";
import { NavigationStyled } from "./NavigationStyled";

const Navigation = (): JSX.Element => {
  return (
    <NavigationStyled>
      <nav className="navigation-exercises">
        <img
          className="logo__image"
          src="img/TheWodBuilderLogoNegro.svg"
          alt="The Wod Builder Logo "
        />
        <ul className="list-exercises-pages">
          <li className="list-exercises-pages_item">
            <NavLink to="/exercises" className={"nav-links"}>
              Exercises
            </NavLink>
          </li>
          <li className="list-exercises-pages_item">
            <NavLink to="/create-exercise" className={"nav-links"}>
              Create exercise
            </NavLink>
          </li>
          <li className="list-exercises-pages_item">
            <NavLink to="/sign-up" className={"nav-links"}>
              Sign up
            </NavLink>
          </li>
          <li className="list-exercises-pages_item">
            <NavLink to="/login" className={"nav-links"}>
              Login
            </NavLink>
          </li>
          <li className="list-exercises-pages_item">
            <NavLink to="*"></NavLink>
          </li>
        </ul>
      </nav>
    </NavigationStyled>
  );
};

export default Navigation;
