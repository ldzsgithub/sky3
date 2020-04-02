import axios from 'axios'
import vuex from '../store/index'

const baseURl = 'http://localhost:25275/';

export function requestDefault(config) {
  const instance = axios.create({
    baseURL: baseURl
  })
  return instance(config)
}


/*携带token*/
export function request(config) {
  const instance = axios.create({
    baseURL: baseURl,
    headers: {
      jwt: vuex.state.token,
      user: vuex.state.user
    }
  })
  instance.interceptors.request.use(config => {
    if(vuex.state.token == '') {
      console.log("token为空");
      return null;
    }
    return config;
  }, err => {
    console.log("request拦截器，失败");
  });
  return instance(config)
}


