import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import styledMainTheme from "../../styledMainTheme";
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

  describe("When it receives an action and the user clicks on it", () => {
    test("Then it should invoke a function on Click", async () => {
      const mockAction = jest.fn();

      render(
        <ThemeProvider theme={styledMainTheme}>
          <Button
            buttonText=""
            classNameButton=""
            actionOnClick={mockAction}
            type="submit"
          ></Button>
        </ThemeProvider>
      );

      const button = screen.getByRole("button", { name: "" });
      await userEvent.click(button);

      expect(mockAction).toHaveBeenCalled();
    });
  });
});
