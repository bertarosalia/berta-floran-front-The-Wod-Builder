import styled from "styled-components";
import styledMainTheme from "../../styledMainTheme";

const CardDetailStyled = styled.div`
  .card-detail__container {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px;
  }

  .card-detail__button--close {
    height: 30px;
    width: 30px;
    font-size: 20px;
    font-weight: bold;
    background-color: ${styledMainTheme.buttonBig};
    border-radius: 50px;
    align-self: flex-end;
    border: none;
    outline: none;
    margin-top: 40px;
    margin-right: 130px;

    &:hover {
      font-size: 18px;
      outline: auto;
      cursor: pointer;
    }
  }

  .card-detail__title {
    text-align: center;
    color: ${styledMainTheme.white};
    margin-bottom: 40px;
  }

  .card-detail__image {
    width: 250px;
    height: 250px;
    border-radius: 30px;
    object-fit: cover;
    margin-bottom: 20px;
  }

  .card-detail__info {
    list-style: none;
    color: ${styledMainTheme.white};
    font-size: 18px;
    display: flex;
    flex-direction: column;
    padding-left: 200px;
    padding-right: 200px;
  }

  .info__data {
    margin-bottom: 10px;
  }

  .info__data--description {
    margin-bottom: 50px;
  }
`;

export default CardDetailStyled;
