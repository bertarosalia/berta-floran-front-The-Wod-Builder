import styledMainTheme from "../../styledMainTheme";
import styled from "styled-components";

export const NavigationStyled = styled.div`
  .nav-links {
    text-decoration: none;
    color: ${styledMainTheme.black};
    font-weight: bold;
    padding: 20px;
    margin-left: 20px;
  }

  .navigation-exercises {
    background-color: ${styledMainTheme.navigation};
    height: 110px;
    display: flex;
    flex-direction: row;
    list-style: none;
    align-items: center;
    justify-content: space-around;
  }

  .logo__image {
    margin-left: 30px;
  }

  .list-exercises-pages {
    display: flex;
    flex-direction: row;
    list-style: none;
  }
`;
