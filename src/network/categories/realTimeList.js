import {request} from "../request";

export function selectByHostId(hostId) {
  return request({
    url: "/alarm/selectByHostId",
    params: {
      hostId: hostId
    }
  })
}

export function selectOrg(hostId) {
  return request({
    url: "/org",
    params: {
      hostId: hostId
    }
  })
}
