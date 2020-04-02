import {request, requestDefault} from "./request";

export function doLogin(username, password) {
  return requestDefault({
    url: "/user/login",
    params: {
      username: username,
      password: password,
    }
  })
}

export function selectOrg(username) {
  return request({
    url: "/org/get",
    params: {
      username: username
    }
  })
}
