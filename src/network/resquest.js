import axios from 'axios'

export function resquest(config) {
  const instance = axios.create({
    baseURI: 'http://localhost:25275'
  })
  return resquest(config)
}

resquest({url: ''}).then(() => {

}).catch(() => {

})