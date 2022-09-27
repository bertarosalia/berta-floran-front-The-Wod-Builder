import styled from "styled-components";

const ListExercisesStyled = styled.main`
  .exercises-list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    @media (min-width: 700px) {
      justify-content: flex-start;
    }
    &__item {
      @media (min-width: 700px) {
        padding: 20px;
        margin-bottom: 30px;
      }
    }
  }
`;

export default ListExercisesStyled;
