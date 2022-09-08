import styled from "styled-components";
import styledMainTheme from "../../styledMainTheme";

const CardDetailStyled = styled.div`
  .card-detail__container {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 40px;
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
