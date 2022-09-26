import toast from "react-hot-toast";
import { useAppDispatch } from "../../app/hooks";
import { ProtoUser, User } from "../../features/store/users/model/user";
import { loginUserActionCreator } from "../../features/store/users/userSlice";
import fetchToken from "../../utils/auth/auth";

export const errorModal = (error: string) =>
  toast.error(error, {
    position: "top-center",
    duration: 5000,
  });

export const successModal = (message: string) =>
  toast.success(message, {
    position: "top-center",
    duration: 5000,
  });

const useUser = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const dispatch = useAppDispatch();

  const userRegister = async (registerData: ProtoUser) => {
    try {
      const response = await fetch(apiUrl + "user/register/", {
        method: "POST",
        body: JSON.stringify(registerData),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error();
      }
    } catch (error) {
      errorModal("Uh, no! You need to take action! Something went wrong!");

      return;
    }
    successModal("Good news! The account has been successfully created!");
  };

  const userLogin = async (formLoginData: User) => {
    let response;
    try {
      response = await fetch(apiUrl + "user/login/", {
        method: "POST",
        body: JSON.stringify(formLoginData),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error();
      }
    } catch (error) {
      errorModal("Uh no! You are not logged yet. Try again!");
    }
    const { userToken } = await (response as Response).json();

    const user = fetchToken(userToken);
    successModal("Let´s train!");

    dispatch(loginUserActionCreator(user));

    localStorage.setItem("token", user.token);
  };
  return { userRegister, userLogin };
};

export default useUser;
