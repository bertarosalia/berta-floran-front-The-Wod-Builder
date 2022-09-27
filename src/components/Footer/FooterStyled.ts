import styled from "styled-components";
import styledMainTheme from "../../styledMainTheme";

const FooterStyled = styled.footer`
  background-color: ${styledMainTheme.navigation};
  padding: 16px;
  gap: 16px;
  bottom: 0;
  @media (min-width: 700px) {
  }
  .footer__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 20px;
    @media (min-width: 700px) {
      align-content: space-between;
      justify-content: space-around;
      gap: 16px;
      flex-direction: row;
    }
  }

  .footer__contact {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    margin-bottom: 15px;
    @media (min-width: 700px) {
      margin-bottom: 30px;
    }
  }

  .footer__contact--details {
    margin-bottom: 5px;
    color: ${styledMainTheme.black};
    font-weight: bold;
  }

  .footer__download {
    height: 100px;
    width: 300px;
    @media (min-width: 700px) {
      margin: 20;
      cursor: pointer;
    }
  }

  .footer__icon {
    height: 40px;
    width: 40px;
    margin: 15px;
    margin-top: 45px;

    @media (min-width: 700px) {
      cursor: pointer;
      margin-top: 0;
    }
  }

  .footer__icon--instagram {
    height: 60px;
    width: 60px;
    margin-bottom: 5px;
    cursor: pointer;
  }
`;

export default FooterStyled;
