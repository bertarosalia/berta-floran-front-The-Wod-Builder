import jwt from "jwt-decode";

const fetchToken = (token: string) => {
  const payloadToken: {
    id: string;
    email: string;
    iat: number;
  } = jwt(token);

  const user = {
    token: token,
    id: payloadToken.id,
    email: payloadToken.email,
  };
  return user;
};

export default fetchToken;
