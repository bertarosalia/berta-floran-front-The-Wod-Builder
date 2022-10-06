import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a gif with exercises materials", () => {
      const gifAlternativeText = "loading...";
      render(<Loading />);

      const image = screen.getByAltText(gifAlternativeText);

      expect(image).toBeInTheDocument();
    });

    test("Then it should show text 'Loading...'", () => {
      const textLoading = "Loading...";
      render(<Loading />);

      const text = screen.getByText(textLoading);

      expect(text).toBeInTheDocument();
    });
  });
});
