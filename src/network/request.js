import axios from 'axios'

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
      jwt: $store.state.token,
      user: $store.state.user
    }
  })
  instance.interceptors.request.use(config => {
    if($store.state.token == '') {

    }
    return config;
  }, err => {
    console.log("request拦截器，失败");
  });
  return instance(config)
}


