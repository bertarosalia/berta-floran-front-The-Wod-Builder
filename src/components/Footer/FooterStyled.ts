import styled from "styled-components";
import styledMainTheme from "../../styledMainTheme";

const FooterStyled = styled.footer`
  background-color: ${styledMainTheme.navigation};
  color: white;

  .footer__container {
    display: flex;
    align-content: space-between;
    justify-content: space-around;
  }

  .footer__contact {
    display: flex;
    flex-direction: column;
    font-size: 16px;
  }

  .footer__contact--details {
    margin-bottom: 5px;
    color: ${styledMainTheme.black};
    font-weight: bold;
  }

  .footer__download {
    height: 150px;
    width: 350px;
    cursor: pointer;
  }

  .footer__icon {
    height: 50px;
    width: 50px;
    margin: 15px;
    margin-top: 45px;
    cursor: pointer;
  }

  .footer__icon--instagram {
    height: 70px;
    width: 70px;
    margin-bottom: 5px;
    cursor: pointer;
  }
`;

export default FooterStyled;
