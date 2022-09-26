import { userLoginState } from "./model/user";
import { userReducer } from "./userSlice";

describe("Given a user reducer function", () => {
  describe("When it´s invoked with login user and an invalid state or action", () => {
    test("Then it should return the initial state", () => {
      const previousUserState: userLoginState = {
        isLogged: false,
        user: {
          name: "",
        },
      };
      const wrongState = undefined;
      const unknownAction = { type: "" };

      const userReducersReturn = userReducer(wrongState, unknownAction);

      expect(userReducersReturn).toStrictEqual(previousUserState);
    });
  });
  describe("When it´s called with previousUserState and action login user", () => {
    test("Then it should return the property isLogged true with user data", () => {
      const previousUserState: userLoginState = {
        isLogged: false,
        user: {
          name: "",
        },
      };
      const userPayload = {
        type: "user/loginUser",
        payload: { name: "Manuela" },
      };

      const newStateExpected: userLoginState = {
        isLogged: true,
        user: { name: "Manuela" },
      };

      const newState = userReducer(previousUserState, userPayload);

      expect(newState).toStrictEqual(newStateExpected);
    });
  });
  describe("Whe it´s called logout user reducer with previousState and action logout user", () => {
    test("Then it should return the initial state", () => {
      const previousUserState: userLoginState = {
        isLogged: true,
        user: {
          name: "Manuela",
        },
      };
      const userPayload = {
        type: "user/logoutUser",
      };
      const newStateExpected: userLoginState = {
        isLogged: false,
        user: {
          name: "",
        },
      };

      const newState = userReducer(previousUserState, userPayload);

      expect(newState).toStrictEqual(newStateExpected);
    });
  });
});
