import { UIState } from "./model/UI";
import { UIReducer } from "./UISlice";

describe("Given the UISlicer", () => {
  const previousUIPayload: UIState = {
    isLoadingShowing: false,
    message: "",
    type: true,
  };
  describe("When call showLoader reducer with previousUIState", () => {
    test("Then should return same previosUIState with isLoadingShowing property to true", () => {
      const UIPayload = {
        type: "ui/showLoader",
      };

      const expectedNewUI = {
        isLoadingShowing: true,
        message: "",
        type: true,
      };

      const newUI = UIReducer(previousUIPayload, UIPayload);

      expect(newUI).toStrictEqual(expectedNewUI);
    });
  });

  describe("When call closeLoader reducer with previousUIState", () => {
    test("Then should return same previosUIState with isLoadingShowing property to false", () => {
      const UIPayload = {
        type: "ui/closeLoader",
      };

      const expectedNewUI = {
        isLoadingShowing: false,
        message: "",
        type: true,
      };

      const newUI = UIReducer(previousUIPayload, UIPayload);

      expect(newUI).toStrictEqual(expectedNewUI);
    });
  });
});
