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
  }

  .footer__contact {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    margin-bottom: 30px;
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
  }

  .footer__icon {
    height: 40px;
    width: 40px;
    margin: 15px;
    margin-top: 45px;
    cursor: pointer;
  }

  .footer__icon--instagram {
    height: 60px;
    width: 60px;
    margin-bottom: 5px;
    cursor: pointer;
  }
`;

export default FooterStyled;
