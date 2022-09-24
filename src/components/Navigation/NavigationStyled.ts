import styledMainTheme from "../../styledMainTheme";
import styled from "styled-components";

export const NavigationStyled = styled.div`
  .nav-links {
    text-decoration: none;
    color: ${styledMainTheme.black};
    font-weight: bold;
    padding: 20px;
    margin-left: 20px;
    font-size: 20px;
  }

  .navigation-exercises {
    height: 110px;
    display: flex;
    flex-direction: row;
    list-style: none;
    align-items: center;
    justify-content: space-around;
    background-color: ${styledMainTheme.navigation};
    width: max-content;
    @media (max-width: 320px) {
      height: 100%;
      padding: 16px;
      gap: 16px;
      flex-direction: column;
    }
  }

  .logo__image {
    margin-top: 20px;
  }

  .list-exercises-pages {
    display: flex;
    flex-direction: row;
    list-style: none;
  }
`;
