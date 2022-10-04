import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";

describe("Given the Navigation component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a navigation bar", () => {
      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      );
      const navTest = screen.getByRole("navigation", { name: "" });

      expect(navTest).toBeInTheDocument();
    });

    test("Then it should show an image inside nav bar", () => {
      const imageName = "The Wod Builder Logo";

      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      );
      const navImage = screen.getByRole("img", {
        name: imageName,
      });

      expect(navImage).toBeInTheDocument();
    });
    test("Then it should show a button inside nav bar", () => {
      const buttonName = "Open Menu";

      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      );
      const navButton = screen.getByRole("button", {
        name: buttonName,
      });

      expect(navButton).toBeInTheDocument();
    });
  });
});
