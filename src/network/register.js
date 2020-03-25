import {requestDefault} from "./request";

export function doRegister(username, password, phoneNumber) {
  return requestDefault({
    url: "/user/register",
    params: {
      username: username,
      password: password,
      phoneNumber: phoneNumber
    }
  })
}
