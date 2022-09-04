import styledMainTheme from "../../styledMainTheme";
import styled from "styled-components";

export const NavigationStyled = styled.div`
  .logo {
    display: flex;
    flex-direction: row;
    margin-right: 220px;
    padding-left: 30px;
  }
  .nav-links {
    text-decoration: none;
    color: ${styledMainTheme.black};
    font-weight: bold;
    padding: 20px;
  }

  .navigation-exercises {
    background-color: ${styledMainTheme.navigation};
    height: 110px;
    display: flex;
    flex-direction: row;
    list-style: none;
    align-items: center;
    justify-content: flex-end;
    padding-right: 110px;
  }
`;
