import styledMainTheme from "../../styledMainTheme";
import styled from "styled-components";

export const NavigationStyled = styled.div`
  .nav-links {
    display: none;
    @media (min-width: 700px) {
      display: block;
      margin: 10px;
      text-decoration: none;
      color: ${styledMainTheme.black};
      font-weight: bold;
      padding: 10px;
      font-size: 20px;
    }
  }

  .navigation-exercises {
    background-color: ${styledMainTheme.background};
    display: flex;
    padding: 50px;
    align-items: center;
    @media (min-width: 700px) {
      list-style: none;
      background-color: ${styledMainTheme.navigation};
      height: 110px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      padding: 10px;
    }
  }

  .logo__image--desktop {
    display: none;
    @media (min-width: 700px) {
      display: block;
      margin-bottom: 10px;
    }
  }

  .logo__image--mobile {
    @media (min-width: 700px) {
      display: none;
    }
  }

  .list-exercises-pages {
    display: none;
    @media (min-width: 700px) {
      display: flex;
      flex-direction: row;
      list-style: none;
    }
  }
  .list-exercises-pages_item {
    display: none;
    @media (min-width: 700px) {
      display: block;
      margin-bottom: 10px;
    }
  }
`;
