export interface ProtoUser {
  name: string;
  email: string;
  password: string;
  repeat_password: string;
}

export interface User {
  name: string;
}

export interface userLoginState {
  isLogged: boolean;
  user: {
    name: string;
  };
}
