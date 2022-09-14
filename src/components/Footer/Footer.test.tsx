import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Given the Footer component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show social images of instagram, twitter and facebook", () => {
      const alternativeTextInstagram = "Instagram icon";
      const alternativeTextTwitter = "Twitter icon";
      const alternativeTextFacebook = "Facebook icon";

      render(<Footer />);
      const instagramImage = screen.getByRole("img", {
        name: alternativeTextInstagram,
      });
      const twitterImage = screen.getByRole("img", {
        name: alternativeTextTwitter,
      });
      const facebookImage = screen.getByRole("img", {
        name: alternativeTextFacebook,
      });

      expect(instagramImage).toBeInTheDocument();
      expect(twitterImage).toBeInTheDocument();
      expect(facebookImage).toBeInTheDocument();
    });

    test("Then it should a heading with 'contact:' text", () => {
      const contactText = "Contact:";

      render(<Footer />);
      const contact = screen.getByText(contactText);

      expect(contact).toBeInTheDocument();
    });
  });
});
