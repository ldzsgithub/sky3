import {request} from "../request";

export function selectHistoryByProbeId(probeId, date) {
  return request({
    url: "/alarm/selectHistoryByProbeId",
    params: {
      probeId: probeId,
      date: date
    }
  })
}

export function selectHistoryByProbeIdLine(probeId, date) {
  return request({
    url: "/alarm/selectHistoryByProbeIdLine",
    params: {
      probeId: probeId,
      date: date
    }
  })
}
