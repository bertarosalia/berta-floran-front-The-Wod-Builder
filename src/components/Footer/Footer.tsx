import FooterStyled from "./FooterStyled";

const Footer = (): JSX.Element => {
  return (
    <FooterStyled>
      <div className="footer__container">
        <div className="footer__contact">
          <h2 className="footer__contact--details">{"Contact:"}</h2>
          <span className="footer__contact--details">{"657641257"}</span>
          <span className="footer__contact--details">
            {"Napoles Street, 260."}
          </span>
          <span className="footer__contact--details">
            {"Barcelona (Spain)"}
          </span>
        </div>
        <img
          src="img/iOS.svg"
          alt="Download icon"
          className="footer__download"
        ></img>
        <div className="footer__social-container">
          <img
            src="img/Facebook-icon.svg"
            alt="Facebook icon"
            className="footer__icon"
          ></img>
          <img
            src="img/Twitter-icon.svg"
            alt="Twitter icon"
            className="footer__icon"
          ></img>
          <img
            src="img/Instagram-icon.svg"
            alt="Instagram icon"
            className="footer__icon--instagram"
          ></img>
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
