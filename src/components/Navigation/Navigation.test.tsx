import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";

describe("Given the Navigation component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a logo inside nav bar with alternative text 'The Wod Builder logo'", () => {
      const alternativeTextlogo = "The Wod Builder logo";

      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      );
      const navLogo = screen.getByRole("img", { name: alternativeTextlogo });

      expect(navLogo).toBeInTheDocument();
    });

    test("Then it should show 'Exercises' inside nav bar", () => {
      const text = "Exercises";

      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      );
      const navLogo = screen.getByRole("link", {
        name: text,
      });

      expect(navLogo).toBeInTheDocument();
    });
    test("Then it should show 'Register' inside nav bar", () => {
      const text = "Register";

      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      );
      const navLink = screen.getByRole("link", {
        name: text,
      });

      expect(navLink).toBeInTheDocument();
    });
  });
});
