import {requestDefault} from "./request";

export function doRegister(registerForm) {
  return requestDefault({
    url: "/user/register",
    params: {
      username: registerForm.username,
      password: registerForm.password,
      phoneNumber: registerForm.phoneNumber
    }
  })
}
