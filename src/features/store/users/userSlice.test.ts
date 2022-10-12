import { UserLoginState } from "./model/user";
import { userReducer } from "./userSlice";

describe("Given a user reducer function", () => {
  describe("When it´s invoked with login user and an invalid state or action", () => {
    test("Then it should return the initial state", () => {
      const previousUserState: UserLoginState = {
        isLogged: false,
        user: {
          email: "",
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
      const previousUserState: UserLoginState = {
        isLogged: false,
        user: {
          email: "",
        },
      };
      const userPayload = {
        type: "user/loginUser",
        payload: { email: "manuela@manuela.com" },
      };

      const newStateExpected: UserLoginState = {
        isLogged: true,
        user: { email: "manuela@manuela.com" },
      };

      const newState = userReducer(previousUserState, userPayload);

      expect(newState).toStrictEqual(newStateExpected);
    });
  });
  describe("Whe it´s called logout user reducer with previousState and action logout user", () => {
    test("Then it should return the initial state", () => {
      const previousUserState: UserLoginState = {
        isLogged: true,
        user: {
          email: "manuela@manuela.com",
        },
      };
      const userPayload = {
        type: "user/logoutUser",
      };
      const newStateExpected: UserLoginState = {
        isLogged: false,
        user: {
          email: "",
        },
      };

      const newState = userReducer(previousUserState, userPayload);

      expect(newState).toStrictEqual(newStateExpected);
    });
  });
});
