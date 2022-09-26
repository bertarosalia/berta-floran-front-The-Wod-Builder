import styled from "styled-components";

const ListExercisesStyled = styled.main`
  .exercises-list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    &__item {
      padding: 20px;
      margin-bottom: 30px;
    }

    @media (max-width: 320px) {
      flex-direction: column;
    }
  }
`;

export default ListExercisesStyled;
