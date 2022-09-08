import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given a not found page component", () => {
  describe("When is rendered", () => {
    test("Then it should show a text 'Page Not Found 404' as name of the image inside", () => {
      render(<NotFoundPage />);

      const expectedTitle = screen.getByText("Page Not Found 404");

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
