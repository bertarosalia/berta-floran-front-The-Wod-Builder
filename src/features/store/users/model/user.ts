export interface ProtoUser {
  name: string;
  email: string;
  password: string;
  repeat_password: string;
}

export interface User {
  email: string;
}

export interface userLoginState {
  isLogged: boolean;
  user: {
    email: string;
  };
}

export interface UserLogin {
  email: string;
  password: string;
}
