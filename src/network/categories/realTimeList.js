import {request} from "../request";

export function selectByHostId(hostId) {
  return request({
    url: "/alarm/selectByHostId",
    params: {
      hostId: hostId
    }
  })
}
