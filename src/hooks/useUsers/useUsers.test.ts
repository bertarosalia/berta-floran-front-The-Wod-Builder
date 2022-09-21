import { renderHook } from "@testing-library/react";
import toast from "react-hot-toast";
import { ProtoUser } from "../../features/store/users/model/user";
import useUser from "./useUsers";

let user: ProtoUser;

beforeEach(() => {
  user = {
    name: "Manuela",
    email: "manuela@manuela.com",
    password: "12345",
    repeat_password: "12345",
  };
});

jest.mock("react-hot-toast");

const mockUseDispatch = jest.fn();

jest.mock("../../app/hooks", () => ({
  ...jest.requireActual("../../app/hooks"),
  useAppDispatch: () => mockUseDispatch,
}));

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

let Wrapper: ({ children }: WrapperProps) => JSX.Element;

describe("Given the use users custom hook", () => {
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
  });
});
