import styled from "styled-components";
import styledMainTheme from "../../styledMainTheme";

const FooterStyled = styled.footer`
  background-color: ${styledMainTheme.navigation};
  height: 100%;

  .footer__container {
    display: flex;
    align-content: space-between;
    justify-content: space-around;
    gap: 16px;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      margin: 0;
    }
  }

  .footer__contact {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    margin-bottom: 30px;
    @media (max-width: 768px) {
      margin-bottom: 0;
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
    cursor: pointer;
    margin: 20px;
    @media (max-width: 768px) {
      margin: 0;
    }
  }

  .footer__icon {
    height: 40px;
    width: 40px;
    margin: 15px;
    margin-top: 45px;
    cursor: pointer;
    @media (max-width: 768px) {
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
