import styled from "styled-components";
import styledMainTheme from "../../styledMainTheme";

const ListExercisesStyled = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px;

  .exercises-list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    &__item {
      padding: 20px;
      margin-bottom: 30px;
    }
    &__title {
      text-align: center;
      color: ${styledMainTheme.white};
    }
  }
`;

export default ListExercisesStyled;
