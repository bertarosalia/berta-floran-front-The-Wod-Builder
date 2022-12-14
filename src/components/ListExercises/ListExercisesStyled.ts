import styled from "styled-components";

const ListExercisesStyled = styled.main`
  .exercises-list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
    justify-content: center;
    @media (min-width: 700px) {
      justify-content: flex-start;
      margin-left: 50px;
    }
    &__item {
      @media (min-width: 700px) {
        padding: 10px;
        margin-bottom: 10px;
      }
    }
  }
`;

export default ListExercisesStyled;
