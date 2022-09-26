import { userLoginState } from "./model/user";
import { userReducer } from "./userSlice";

describe("Given a user reducer function", () => {
  const initialUser = {
    isLogged: false,
    user: {
      name: "",
    },
  };
  describe("When it´s invoked with login user and an invalid state or action", () => {
    test("Then it should return the initial state", () => {
      const wrongState = undefined;
      const unknownAction = { type: "" };

      const userReducersReturn = userReducer(wrongState, unknownAction);

      expect(userReducersReturn).toStrictEqual(initialUser);
    });
  });
  describe("When it´s called with previousUIState and a payload with an user", () => {
    test("Then it should return the property isLogged true with user data", () => {
      const userPayload = {
        type: "user/loginUser",
        payload: { name: "Manuela" },
      };

      const newStateExpected: userLoginState = {
        isLogged: true,
        user: { name: "Manuela" },
      };

      const newState = userReducer(initialUser, userPayload);

      expect(newState).toStrictEqual(newStateExpected);
    });
  });
});
