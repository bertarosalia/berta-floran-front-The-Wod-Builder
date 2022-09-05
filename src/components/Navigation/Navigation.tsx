import { NavLink } from "react-router-dom";
import { NavigationStyled } from "./NavigationStyled";

const Navigation = (): JSX.Element => {
  return (
    <NavigationStyled>
      <nav className="navigation-exercises">
        <img
          className="logo__image"
          alt="The Wod Builder logo"
          height="24"
          width="218"
          src="img/logoNegro.png"
        ></img>
        <ul className="list-exercises-pages">
          <li className="list-exercises-pages_item">
            <NavLink to="/exercises" className={"nav-links"}>
              Exercises
            </NavLink>
          </li>
          <li className="list-exercises-pages_item">
            <NavLink to="/register" className={"nav-links"}>
              Register
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
