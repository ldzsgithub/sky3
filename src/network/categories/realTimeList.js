import {request, requestDefault} from "../request";

export function doLogin(username, password) {
  return requestDefault({
    url: "/org",
    params: {
      username: username,
      password: password,
    }
  })
}
