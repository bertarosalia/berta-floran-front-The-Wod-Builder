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

    test("Then it should show 'Exercises' text inside nav bar", () => {
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
    test("Then it should show 'Register' text inside nav bar", () => {
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
