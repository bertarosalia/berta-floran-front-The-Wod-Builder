import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a component Button", () => {
  describe("When it receives a 'FILTER' text", () => {
    test("Then it should show a text 'FILTER' inside", () => {
      const testButtonText = "FILTER";

      render(
        <Button
          buttonText="FILTER"
          classNameButton=""
          actionOnClick={() => {}}
          type="submit"
        ></Button>
      );

      const receivedButtonText = screen.getByRole("button", {
        name: testButtonText,
      });

      expect(receivedButtonText).toBeInTheDocument();
    });
  });
});
