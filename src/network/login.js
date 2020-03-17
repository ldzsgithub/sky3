import {requestDefault} from "./request";

export function doLogin(loginForm) {
  return requestDefault({
    url: "/user/login",
    params: {
      username: loginForm.username,
      password: loginForm.password,
    }
  })
}
