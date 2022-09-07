import styled from "styled-components";
import styledMainTheme from "../../styledMainTheme";

export const ButtonStyled = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-right: 175px;

  .button-filter {
    background-color: ${styledMainTheme.buttonBig};
    font-weight: bold;
    text-decoration: none;
    height: 50px;
    width: 130px;
    border-radius: 10px;
    font-size: 18px;
    text-align: center;
    border: none;
    outline: none;
    cursor: pointer;

    &:hover {
      background-color: inherit;
      font-size: 18px;
    }
  }
`;
