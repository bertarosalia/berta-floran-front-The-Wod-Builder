import styledMainTheme from "../../styledMainTheme";
import styled from "styled-components";

export const NavigationStyled = styled.div`
  .nav-links {
    text-decoration: none;
    color: ${styledMainTheme.black};
    font-weight: bold;
    padding: 20px;
    font-size: 20px;
    @media (min-width: 700px) {
      margin: 20px;
    }
  }

  .navigation-exercises {
    background-color: ${styledMainTheme.navigation};
    padding: 40px;
    display: flex;
    flex-direction: row;
    list-style: none;
    @media (min-width: 700px) {
      height: 110px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      padding: 16px;
    }
  }

  .logo__image {
    margin: 20px;
    @media (min-width: 700px) {
      margin-top: 30px;
      height: 50px;
    }
  }

  .list-exercises-pages {
    list-style: none;
    @media (min-width: 700px) {
      display: flex;
      flex-direction: row;
    }
  }
  .list-exercises-pages_item {
    margin-bottom: 10px;
  }
`;
