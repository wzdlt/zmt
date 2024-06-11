import request from "../utils/request";
export function getNumber(data) {
  return request({
    url: '',
    data: {
      ...data
    },
    method: 'POST'
  })
}
export function Login(data) {
  return request({
    url: "api/login",
    data,
    method: 'POST',
    isToken: false
  })
}