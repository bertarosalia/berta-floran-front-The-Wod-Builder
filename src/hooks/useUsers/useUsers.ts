import toast from "react-hot-toast";
import { ProtoUser } from "../../features/store/users/model/user";

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
  return { userRegister };
};

export default useUser;
