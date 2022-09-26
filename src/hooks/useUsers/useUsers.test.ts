import { renderHook } from "@testing-library/react";
import { ProtoUser } from "../../features/store/users/model/user";
import toast from "react-hot-toast";
import { loginUserActionCreator } from "../../features/store/users/userSlice";
import useUser from "./useUsers";

const mockDispatch = jest.fn();
const mockNavigate = jest.fn();
jest.mock("react-hot-toast");
let user: ProtoUser;

const mockuserWithToken = {
  token: "token",
  id: "",
  password: "12345",
  email: "",
};
jest.mock("../../utils/auth/auth", () => () => mockuserWithToken);
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));
interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}
let Wrapper: ({ children }: WrapperProps) => JSX.Element;

// Wrapper = ({ children }: WrapperProps): JSX.Element => {
//   return (
//     <Provider store={store}>
//       <BrowserRouter>{children}</BrowserRouter>
//     </Provider>
//   );
// };
describe("Given the use users custom hook", () => {
  beforeEach(() => {
    user = {
      name: "pepe",
      email: "pepe@pepe.com",
      password: "11345",
      repeat_password: "11345",
    };
  });

  describe("When use register is called with a valid user", () => {
    test("Then should call success modal", async () => {
      const successModalMessage =
        "Good news! The account has been successfully created!";

      const {
        result: {
          current: { userRegister },
        },
      } = renderHook(useUser, { wrapper: Wrapper });

      await userRegister(user);

      expect(toast.success).toHaveBeenCalledWith(successModalMessage, {
        duration: 5000,
        position: "top-center",
      });
    });

    describe("When user register it´s called with an invalid user", () => {
      test("Then it should call the error modal", async () => {
        const errorUser = {
          name: "",
          email: "",
          password: "",
          repeat_password: "",
        };
        const errorModalMessage =
          "Uh, no! You need to take action! Something went wrong!";

        const {
          result: {
            current: { userRegister },
          },
        } = renderHook(useUser, { wrapper: Wrapper });

        await userRegister(errorUser);

        expect(toast.error).toHaveBeenCalledWith(errorModalMessage, {
          duration: 5000,
          position: "top-center",
        });
      });
    });

    describe("When login user is called", () => {
      const loggedUser = {
        email: "berta@berta.com",
        password: "123456",
      };
      test("Then should call the dispatch login and a user", async () => {
        const {
          result: {
            current: { userLogin },
          },
        } = renderHook(useUser, { wrapper: Wrapper });

        await userLogin(loggedUser);

        expect(mockDispatch).toHaveBeenCalledWith(
          loginUserActionCreator(mockuserWithToken)
        );
      });
      test("It should call the success modal", async () => {
        const {
          result: {
            current: { userLogin },
          },
        } = renderHook(useUser, { wrapper: Wrapper });

        await userLogin(loggedUser);

        expect(toast.success).toHaveBeenCalledWith("Let´s train!", {
          duration: 5000,
          position: "top-center",
        });
      });
      describe("And it´s called with an invalid user", () => {
        test("Then error modal has called with message 'Uh no! You are not logged yet. Try again!'", async () => {
          const {
            result: {
              current: { userLogin },
            },
          } = renderHook(useUser, { wrapper: Wrapper });

          mockuserWithToken.password = "45687";

          await userLogin(mockuserWithToken);

          expect(toast.error).toHaveBeenCalledWith(
            "Uh no! You are not logged yet. Try again!",
            {
              duration: 5000,
              position: "top-center",
            }
          );
        });
      });
    });
  });
});
