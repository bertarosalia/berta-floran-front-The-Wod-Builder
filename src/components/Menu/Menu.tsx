import { slide as BurgerMenu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import MenuStyled from "./MenuStyled";

const Menu = (): JSX.Element => {
  return (
    <MenuStyled>
      <BurgerMenu right noOverlay>
        <NavLink to={"/sign-up"}>Sign up</NavLink>
        <NavLink to={"/login"}>Log In</NavLink>
        <NavLink to={"/exercises"}>Exercises</NavLink>
        <NavLink to={"/create-exercise"}>Create Exercise</NavLink>
      </BurgerMenu>
    </MenuStyled>
  );
};

export default Menu;
