import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given a not found page component", () => {
  describe("When is rendered", () => {
    test("Then it should show a image inside", () => {
      render(<NotFoundPage />);

      const expectedImage = screen.getByRole("img", {
        name: "Not Found Error 404",
      });

      expect(expectedImage).toBeInTheDocument();
    });
  });
});
