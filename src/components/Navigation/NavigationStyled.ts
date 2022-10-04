import styledMainTheme from "../../styledMainTheme";
import styled from "styled-components";

export const NavigationStyled = styled.div`
  .nav-links {
    visibility: hidden;
    @media (min-width: 700px) {
      visibility: visible;
      margin: 10px;
      text-decoration: none;
      color: ${styledMainTheme.black};
      font-weight: bold;
      padding: 20px;
      font-size: 20px;
    }
  }

  .navigation-exercises {
    background-color: ${styledMainTheme.background};
    display: flex;
    flex-direction: row-reverse;
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
    visibility: hidden;
    @media (min-width: 700px) {
      visibility: visible;
      margin-top: 30px;
      height: 50px;
      margin: 20px;
    }
  }

  .logo__image--mobile {
    visibility: visible;
    @media (min-width: 700px) {
      visibility: hidden;
    }
  }

  .list-exercises-pages {
    visibility: hidden;
    @media (min-width: 700px) {
      display: flex;
      flex-direction: row;
      list-style: none;
    }
  }
  .list-exercises-pages_item {
    visibility: hidden;
    @media (min-width: 700px) {
      margin-bottom: 10px;
    }
  }
`;
