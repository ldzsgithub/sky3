import {requestDefault} from "./request";

export function doLogin(username, password) {
  return requestDefault({
    url: "/user/login",
    params: {
      username: username,
      password: password,
    }
  })
}
