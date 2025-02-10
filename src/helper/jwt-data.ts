import Cookies from "js-cookie";
import { decodeToken, isExpired } from "react-jwt";

interface JwtToken {
  email: string;
  role: string;
  id: string;
}

export const jwtData = () => {
  const accessToken = Cookies.get("x-token");

  if (!isExpired(accessToken)) {
    const dataToken = decodeToken<JwtToken>(accessToken);

    return dataToken.role;
  }
  return false;
};
